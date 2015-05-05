<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=1">

    <title>Webiny Platform</title>
    <script src="/Assets/Google/traceur.js" type="text/javascript"></script>
    <!--<script src="/Assets/es6-module-loader.js" type="text/javascript"></script>-->
    <script src="/Assets/Google/bootstrap.js" type="text/javascript"></script>
    <script src="/Assets/React/react.js"></script>
    <script src="/Assets/React/react-with-addons.js"></script>
    <script src="/Assets/Lib/q/q.js"></script>
    <script src="/Assets/Lib/axios/dist/axios.min.js"></script>
    <script src="/Assets/Lib/lodash.min.js"></script>
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
        // Load Webiny SystemLoader and then bootstrap the application
        System.import('/Assets/SystemLoader').then(SystemLoader => {
            System = new SystemLoader.default();
            System.import('/Assets/App');
        });
    </script>
    <script src="/Assets/Lib/history.js/native.history.js"></script>
    <script src="/Assets/Lib/Md5.js" type="text/javascript"></script>
</head>
<body>
<div id="app"></div>
</body>
</html>