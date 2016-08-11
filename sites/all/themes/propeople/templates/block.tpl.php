<?php
/**
 * @file
 * Returns the HTML for a block.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728246
 */
?>
<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php if ($block->subject): ?>
  <?php print render($title_prefix); ?>
    <h2<?php print $title_attributes; ?>><?php print $block->subject; ?></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php print $content; ?>
</div>
