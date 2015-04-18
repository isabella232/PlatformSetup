<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=1">

    <title>Webiny Platform</title>
    <script src="/Assets/Google/traceur.js" type="text/javascript"></script>
    <script src="/Assets/Google/bootstrap.js" type="text/javascript"></script>
    <script src="/Assets/React/react.js"></script>
    <script src="/Assets/React/react-with-addons.js"></script>
    <script src="/Assets/Lib/q/q.js"></script>
    <script src="/Assets/Lib/axios/dist/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.6.0/lodash.min.js"></script>
    <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,700" rel="stylesheet"
          type="text/css">
    <?php
    foreach ($data['assets']['css'] as $css) {
        echo '<link rel="stylesheet" href="' . $css . '">';
    }
    foreach ($data['assets']['js'] as $js) {
        echo '<script src="' . $js . '"></script>';
    } ?>
    <!-- Apps assets -->
    <script>
        traceur.options.experimental = true;
        var _appUrl = '<?php echo $data['App']->getConfig('Platform.WebPath');?>';
        var _apiUrl = '<?php echo $data['App']->getConfig('Platform.ApiPath');?>';
        var _backendPrefix = '<?php echo $data['App']->getConfig('Platform.Backend.Prefix');?>';
    </script>
    <script type="module">

        // SystemLoader should be here to make sure it is loaded before importing any other modules

        var TraceurLoader = traceur.runtime.TraceurLoader;
        var webLoader = traceur.runtime.webLoader;

        var traceurSystem = System;
        class SystemLoader extends TraceurLoader {
            constructor() {
                super(webLoader, window.location.href);
                this.regex = /\/([\w+]*)\/([\w+]*)\/([\w+\/]*)/;
            }

            normalize(name, referrerName, referrerAddress) {
                if(name.indexOf('/Apps') > -1){
                    return super.normalize(name, referrerName, referrerAddress);
                }

                if (this.regex.exec(name)){
                    var newPath = name.replace(this.regex, '/Apps/$1/Build/Development/Backend/$2/Js/$3');
                    return newPath;
                }

                return super.normalize(name, referrerName, referrerAddress);
            }
        }
        System = new SystemLoader();


    </script>
    <script src="/Assets/Lib/history.js/native.history.js"></script>
    <script src="/Assets/Lib/Md5.js" type="text/javascript"></script>
    <!-- Bootstrap the entire platform -->
    <script src="/Assets/App.js" type="module"></script>
</head>
<body class="">
<div id="app"></div>
</body>
</html>