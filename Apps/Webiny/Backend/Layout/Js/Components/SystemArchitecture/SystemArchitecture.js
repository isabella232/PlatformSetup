import BaseComponent from 'Webiny/Core/Base/BaseComponent';
import DeveloperTools from 'Webiny/Core/Tools/DeveloperTools';

class SystemArchitecture extends BaseComponent {

	getInitialState() {
		return {
			links: DeveloperTools.getMap()
		}
	}

	componentDidMount() {
		this.initialize();
	}

	initialize() {
		var nodes = {};
		var links = this.state.links;

		// Compute the distinct nodes from the links.
		links.forEach(function (link) {
			var l = JSON.parse(JSON.stringify(link));
			var nodeSource = nodes[l.source] || {name: l.source, links: [], type: l.sourceType};
			var nodeTarget = nodes[l.target] || {name: l.target, links: [], type: l.targetType};

			nodeSource.links.push(l.target);
			nodes[l.source] = nodeSource;

			nodeTarget.links.push(l.source);
			nodes[l.target] = nodeTarget;

			link.source = nodeSource;
			link.target = nodeTarget;
		});

		var width = document.documentElement.clientWidth - 75;
		var height = document.documentElement.clientHeight - 150;

		var force = d3.layout.force()
			.nodes(d3.values(nodes))
			.links(links)
			.size([width, height])
			.linkDistance(100)
			.charge(-400)
			.on("tick", tick)
			.start();

		var drag = force.drag()
			.origin(function(d) { return d; })
			.on("dragstart", function(){
				d3.event.sourceEvent.stopPropagation();
			});

		var zoom = d3.behavior.zoom()
			.scaleExtent([0.2, 10])
			.on("zoom", zoomed);

		var margin = {top: -5, right: -5, bottom: -5, left: -5};
		var svg = d3.select(".architecture").append("svg")
			.attr("width", width)
			.attr("height", height)
			.call(zoom);

		var container = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.right + ")");

		// Per-type markers, as they don't inherit styles.
		container.append("defs").selectAll("marker")
			.data(["action", "component", "store"])
			.enter().append("marker")
			.attr("id", function (d) {
				return d;
			})
			.attr("viewBox", "0 -5 10 10")
			.attr("refX", function (d) {
				var arrows = {
					action: 20,
					component: 20,
					store: 26
				};
				return arrows[d];
			})
			.attr("refY", -0.5)
			.attr("markerWidth", 6)
			.attr("markerHeight", 6)
			.attr("orient", "auto")
			.append("path")
			.attr("d", "M0,-5L10,0L0,5");

		var path = container.append("g").selectAll("path")
			.data(force.links())
			.enter().append("path")
			.attr("class", function (d) {
				return "link " + d.sourceType;
			})
			.attr("marker-end", function (d) {
				return "url(#" + d.targetType + ")";
			});

		var radius = {
			action: 12,
			store: 17,
			component: 10
		};
		var circle = container.append("g").selectAll("circle")
			.data(force.nodes())
			.enter().append("circle")
			.on('mouseover', function (obj) {
				var objName = obj.name;
				circle.classed('inactive', function (d) {
					if (objName == d.name || obj.links.indexOf(d.name) != -1) {
						return false;
					}
					return true;
				});

				text.classed('inactive', function (d) {
					if (objName == d.name || obj.links.indexOf(d.name) != -1) {
						return false;
					}
					return true;
				});

				path.classed('inactive', function (d) {
					if (obj.name == d.source.name || obj.name == d.target.name) {
						return false;
					}
					return true;
				});
			})
			.on('mouseout', function (obj) {
				circle.classed('inactive', false);
				path.classed('inactive', false);
				text.classed('inactive', false);
			})
			.attr("r", function (d) {
				return radius[d.type]
			})
			.attr("class", function (d) {
				return "circle " + d.type
			})
			.call(force.drag)
			.call(drag);

		var text = container.append("g").selectAll("text")
			.data(force.nodes())
			.enter().append("text")
			.attr("x", 8)
			.attr("y", ".31em")
			.text(function (d) {
				return d.name;
			});

		// Use elliptical arc path segments to doubly-encode directionality.
		function tick() {
			path.attr("d", linkArc);
			circle.attr("transform", transform);
			text.attr("transform", transform);
		}

		function linkArc(d) {
			var dx = d.target.x - d.source.x, dy = d.target.y - d.source.y, dr = 0;
			return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
		}

		function transform(d) {
			return "translate(" + d.x + "," + d.y + ")";
		}

		function zoomed() {
			container.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
		}
	}
}

export default SystemArchitecture;
