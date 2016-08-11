<?php
  /**
   * @file
   * Returns the HTML for a single Drupal page.
   *
   * Complete documentation for this file is available online.
   * @see https://drupal.org/node/1728148
   */
?>
<header>
  <div class="line1">
    
  </div>
  <div class="line2">
    
  </div>
  <div class="line3">
    
  </div>
  
</header>
  <div id="main-wrapper">
    <aside class="left">
      
    </aside>
    <div id="main">
      
    </div>
    <aside class="right">
      
    </aside>
    
  </div>
<footer>
  
</footer>



<div class="site-container col a-pad-0 page-name-homepage " id="siteContainer">
  <header id="masthead" class="site-header col a-pad-0 a-pad-top-2 m-pad-top-0 overflow-visible" role="banner">
    <div class="LaND-container center overflow-visible">
      <div class="title-container col a-1-4 a-pad-0 m-1-1">
        <hgroup>
          <?php if ($logo): ?>
          <h1 class="site-title"><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a></h1>
          <?php endif; ?>
        </hgroup>
        <ul class="secondary-tablet-menu">
          <li id="menu-item-251" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-251 menu-item-id-251 menu-item-request-a-call"><a href="#request-a-call"><?php print t("Request a call"); ?></a></li>
        </ul>
        <div class="mobile-len"><?php print render($page['header']); ?></div>
        <div class="mobile-burger-button"></div>
      </div>
      <nav role="navigation" class="top-navigation col a-pad-0 a-2-3 m-1-1 overflow-visible">
        <div class="menu-top-menu-container">
          <ul id="Top" class="top-menu">
            <li id="menu-item-251" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-251 menu-item-id-251 menu-item-request-a-call"><a href="/#request-a-call"><?php print t("Request a call"); ?></a>
          </ul>
          <?php print render($page['header']); ?> 
        </div>
      </nav>
    </div>
    <!-- LaND-container -->
    <nav role="navigation" class="main-navigation col a-pad-0 m-1-1 overflow-visible">
      <div class="LaND-container center overflow-visible">
        <div class="menu-primary-container">
          <?php print render($page['header_navigation']); ?> 
        </div>
      </div>
      <!-- LaND-container -->
    </nav>
    <!-- main-navigation -->
  </header>
  <!-- site-header -->
  <div id="main" class="main-container col a-pad-0">
    <?php if($page['slider']) :?>
    <div class="slider-container col a-pad-0 a-pad-bottom-5">
      <div class="slide slide-0 ">
        <div class="LaND-container center slide-master">
          <div class="slide-contents">
            <?php print render($page['slider']); ?>
          </div>
          <!-- slide-contents -->
        </div>
        <!-- LaND-container -->
      </div>
      <!-- slide -->
    </div>
    <!-- slider-container -->
    <?php endif; ?>
    <?php if(!$page['sidebar_normal']) :?>
    <div class="box box-case-studies box-text-center col a-pad-0 a-pad-bottom-5 m-pad-left-2 m-pad-right-2">
      <div class="LaND-container center">
        <?php print $feed_icons; ?>
        <?php print $messages; ?>
        <?php print render($tabs); ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
        <?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print render($page['cont_centr']); ?>
      </div>
      <!-- LaND-container -->
    </div>
    <!-- box-case-studies box-text-center -->
    <?php if($page['cont_bottom']) :?>
    <?php print render($page['cont_bottom']); ?>
    <?php endif; ?>
    <?php endif; ?>
    <?php if($page['sidebar_normal']) :?>
    <div class="box box-blog-article box-text-left col a-pad-0 m-pad-left-2 m-pad-right-2">
      <div class="LaND-container center">
        <div class="col a-pad-0 a-2-3 a-pad-right-6 a-pad-bottom-2 m-1-1 m-pad-1">
          <?php print $feed_icons; ?>
          <?php print $messages; ?>
          <?php print render($tabs); ?>
          <?php print render($page['help']); ?>
          <?php if ($action_links): ?>
          <ul class="action-links"><?php print render($action_links); ?></ul>
          <?php endif; ?>
          <?php print render($page['content']); ?>
          <?php if($page['cont_centr']) :?>
          <?php print render($page['cont_centr']); ?>
          <?php endif; ?>
          <?php if($page['cont_bottom']) :?>
          <?php print render($page['cont_bottom']); ?>
          <?php endif; ?>
        </div>
        <div class="col a-pad-0 a-1-3 a-pad-left-3 m-1-1 m-pad-1">
          <div id="secondary" class="widget-area" role="complementary">
            <?php print render($page['sidebar_normal']); ?>
          </div>
        </div>
      </div>
      <!-- LaND-container -->
    </div>
    <!-- box-case-studies box-text-center -->
    <?php endif; ?>
    <?php if($page['form_bottom']) :?>
    <?php print render($page['form_bottom']); ?>
    <?php endif; ?>
  </div>
  <!-- main-container -->
<div class="LaND-container center">
  <div class="col a-pad-0 a-pad-top-2 a-pad-bottom-2"><?php if($page['pre_footer']) :?>
			  <?php print render($page['pre_footer']); ?>
	<?php endif; ?></div></div>
</div>
<!-- site-container -->
<footer class="col a-pad-0 a-pad-top-2 a-pad-bottom-2 site-footer">
  <div class="LaND-container center">
    <div class="col a-3-4 a-pad-0 a-pad-bottom-2 ml-1-1 mp-1-1 m-pad-left-2 m-pad-right-2">
      <nav role="navigation" class="footer-navigation">
        <div class="menu-footer-container">
          <?php print render($page['footer_menu']); ?>
        </div>
      </nav>
      <!-- footer-navigation -->
      <div class="copyright"><?php print render($page['copyright']); ?></div>
    </div>
    <!-- col -->
    <div class="col a-1-4 a-pad-0 a-pad-left-2 a-pad-bottom-2 ml-1-1 mp-1-1 m-pad-left-2 m-pad-right-2">
      <div class="footer-slogan"><?php print render($page['footer_right']); ?></div>
    </div>
  </div>
  <!-- LaND-container -->
  <div class="col a-pad-0 disclaimer-container">
  <div class="LaND-container center">
    <div class="col a-pad-0 a-pad-top-2 a-pad-bottom-0 a-pad-left-6 a-pad-right-6 m-pad-left-2 m-pad-right-2 disclaimer">					<?php print render($page['footer_bottom']); ?>
    </div>
    <!-- LaND-container -->
  </div>
  <!-- disclaimer-container -->
</footer>
<?php print render($page['bottom']); ?>
