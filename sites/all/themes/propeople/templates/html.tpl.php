<?php
/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728208
 */
?><!DOCTYPE html>
<html <?php if (isset($html_attributes)) { print $html_attributes; } print $rdf_namespaces; ?>>

<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>

  <meta http-equiv="cleartype" content="on">
  <meta name="viewport" content="width=device-width" />
  
  <style type="text/css">
		img.wp-smiley,
		img.emoji {
			display: inline !important;
			border: none !important;
			box-shadow: none !important;
			height: 1em !important;
			width: 1em !important;
			margin: 0 .07em !important;
			vertical-align: -0.1em !important;
			background: none !important;
			padding: 0 !important;
		}
	</style>

  <?php print $styles; ?>
  
  <!--[if lt IE 9]>
  <script src="sites/all/themes/medtron/js/html5.js" type="text/javascript"></script>
  <![endif]-->
 <!-- <script type="text/javascript" src="//use.typekit.net/fwf4jwy.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script> -->

  <?php print $scripts; ?>

</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"19c14806c3","applicationID":"3052554","transactionName":"YQNWYxRTCxZWWxFRDlhJdVQSWwoLGFAKVQRGB1NS","queueTime":0,"applicationTime":1143,"atts":"TURVFVxJGBg=","errorBeacon":"bam.nr-data.net","agent":"js-agent.newrelic.com\/nr-632.min.js"}</script>
</body>
</html>