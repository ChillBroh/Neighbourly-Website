<?php
/**
 * Plugin Name: PublishPress Permissions Pro
 * Plugin URI:  https://publishpress.com/permissions
 * Description: Advanced yet accessible content permissions. Give users or groups type-specific roles. Enable or block access for specific posts or terms.
 * Author: PublishPress
 * Author URI:  https://publishpress.com/
 * Version: 3.8.5
 *
 * Copyright (c) 2022 PublishPress
 *
 * GNU General Public License, Free Software Foundation <https://www.gnu.org/licenses/gpl-3.0.html>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @package     PressPermit Pro
 * @category    Core
 * @author      PublishPress
 * @copyright   Copyright (c) 2022 PublishPress. All rights reserved.
 *
 **/

// @todo: enforce PHP version requirement

if (!defined('ABSPATH')) exit; // Exit if accessed directly

$includeFileRelativePath = '/publishpress/publishpress-instance-protection/include.php';
if (file_exists(__DIR__ . '/vendor' . $includeFileRelativePath)) {
	require_once __DIR__ . '/vendor' . $includeFileRelativePath;
}

if (class_exists('PublishPressInstanceProtection\\Config')) {
	$pluginCheckerConfig = new PublishPressInstanceProtection\Config();
	$pluginCheckerConfig->pluginSlug = 'presspermit-pro';
	$pluginCheckerConfig->pluginName = 'PublishPress Permissions Pro';
	$pluginCheckerConfig->isProPlugin = true;
	$pluginCheckerConfig->freePluginName = 'PublishPress Permissions';

	$pluginChecker = new PublishPressInstanceProtection\InstanceChecker($pluginCheckerConfig);
}

if (!defined('PRESSPERMIT_PRO_FILE')) {
    define('PRESSPERMIT_PRO_FILE', __FILE__);
    define('PRESSPERMIT_PRO_ABSPATH', __DIR__);
}

// negative priority to precede any default WP action handlers
add_action(
    'plugins_loaded', 
    function()
    {
        if (defined('PRESSPERMIT_PRO_VERSION')) {
            return;
        }

        // The Events Calendar Pro: Avoid conflict with recurring event insert / update
        if (defined('DOING_AJAX') && DOING_AJAX && !empty($_POST['action']) && ('gutenberg_events_pro_recurrence_queue' == $_POST['action'])) {
            return;
        }

        if (defined('PMXE_VERSION') && !empty($_SERVER['SCRIPT_NAME']) 
        && (false !== strpos(esc_url_raw($_SERVER['SCRIPT_NAME']), 'wp-load.php'))
        && !empty($_REQUEST['export_key'])
        ) {
            return;
        }

        define('PRESSPERMIT_PRO_VERSION', '3.8.5');

        $edd_id = get_option('presspermit_edd_id', 21050);
        define('PRESSPERMIT_EDD_ITEM_ID', $edd_id);

        @load_plugin_textdomain('presspermit-pro', false, dirname(plugin_basename(PRESSPERMIT_PRO_FILE)) . '/languages');

        require_once(__DIR__ . '/includes-pro/admin-load.php');
        new \PublishPress\Permissions\AdminLoadPro();

        require_once(__DIR__ . '/vendor/publishpress/publishpress-permissions/press-permit-core.php');
    }
    , -10
);

register_activation_hook(
    __FILE__, 
    function()
    {
        require_once( __DIR__.'/vendor/publishpress/publishpress-permissions/activation.php' );
    }
);

register_deactivation_hook(
    __FILE__, 
    function()
    {
        do_action('presspermit_deactivate');
    }
);
