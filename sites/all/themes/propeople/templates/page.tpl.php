<?php
  /**
   * @file
   * Returns the HTML for a single Drupal page.
   *
   * Complete documentation for this file is available online.
   * @see https://drupal.org/node/1728148
   */
?>
<?php print render($page['bottom']); ?>
<header>
  <div class="line1">
    
    <?php if ($logo): ?>
      <div id="logo-wrapper"></div>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
        </a>
      </div>
    <?php endif; ?>
    
    <?php if ($site_name || $site_slogan): ?>
      <div id="name-and-slogan">

        <?php if ($site_name): ?>
          <?php if ($title): ?>
            <h1 id="site-name">
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
            </h1>
          <?php else: /* Use h1 when the content title is empty */ ?>
            <h1 id="site-name">
              <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
            </h1>
          <?php endif; ?>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div id="site-slogan"<?php if ($hide_site_slogan) { print ' class="element-invisible"'; } ?>>
            <?php print $site_slogan; ?>
          </div>
        <?php endif; ?>

      </div> <!-- /#name-and-slogan -->
    <?php endif; ?>

    <nav id="first-nav-group">
      <?php print render($page['header_nav1']); ?>
    </nav>

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
      <?php print $feed_icons; ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
    </div>
    <aside class="right">
      
    </aside>
    
  </div>
<footer>
  
</footer>