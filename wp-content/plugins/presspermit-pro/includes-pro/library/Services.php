<?php
/**
 * @package     PublishPress\Permissions
 * @author      PublishPress <help@publishpress.com>
 * @copyright   Copyright (C) 2020 PublishPress. All rights reserved.
 * @license     GPLv2 or later
 */

namespace PublishPress\Permissions;

if (!presspermit_empty_REQUEST('autoupdater') || !presspermit_empty_REQUEST('autoupdater_nonce') || defined('PRESSPERMIT_PRO_DISABLE_PP_SERVICES')) {
    return;
}

foreach([
    'ContainerExceptionInterface',
    'ContainerInterface',
    'NotFoundExceptionInterface',
] as $class) {
    if (!interface_exists('\Psr\Container\\' . $class)) {
        require_once(PRESSPERMIT_PRO_ABSPATH . "/vendor/psr/container/src/$class.php");
    }
}

foreach([
    'Container',
    'Exception/ExpectedInvokableException',
    'Exception/FrozenServiceException',
    'Exception/InvalidServiceIdentifierException',
    'Exception/UnknownIdentifierException',
] as $class) {
    if (!class_exists('\Pimple\\' . str_replace('/', '\\', $class))) {
        require_once(PRESSPERMIT_PRO_ABSPATH . "/vendor/pimple/pimple/src/Pimple/$class.php");
    }
}

foreach([
    'ServiceProviderInterface',
] as $interface) {
    if (!interface_exists('\Pimple\\' . str_replace('/', '\\', $interface))) {
        require_once(PRESSPERMIT_PRO_ABSPATH . "/vendor/pimple/pimple/src/Pimple/$interface.php");
    }
}

if (!class_exists('\PublishPress\EDD_SL_Plugin_Updater') && !defined('PRESSPERMIT_PRO_NO_PLUGIN_UPDATES')) {
    require_once(PRESSPERMIT_PRO_ABSPATH . '/includes-pro/library/edd-sl-plugin-updater/EDD_SL_Plugin_Updater.php');
}

foreach([
    'Container',
    'Services',
    'ServicesConfig',
    'License',
    'Language',
] as $class) {
    if (!class_exists('\PublishPress\EDD_License\Core\\' . $class)) {
        require_once(PRESSPERMIT_PRO_ABSPATH . "/includes-pro/library/wordpress-edd-license-integration/src/core/$class.php");
    }
}

use Pimple\Container as Pimple;
use Pimple\ServiceProviderInterface;
use \PublishPress\Permissions;
use PublishPress\EDD_License\Core\Container as EDDContainer;
use PublishPress\EDD_License\Core\Services as EDDServices;
use PublishPress\EDD_License\Core\ServicesConfig as EDDServicesConfig;

defined('ABSPATH') or die('No direct script access allowed.');

/**
 * Class Services
 */
class Services implements ServiceProviderInterface
{
    protected $module;

    /**
     * Services constructor.
     */
    public function __construct(\PublishPress\Permissions $module)
    {
        $this->module = $module;

    }

    /**
     * Registers services on the given container.
     *
     * This method should only be used to configure services and parameters.
     * It should not get services.
     *
     * @param Pimple $container A container instance
     */
    public function register(Pimple $container)
    {
        $container['module'] = function ($c) {
            return $this->module;
        };

        $container['LICENSE_KEY'] = function ($c) {
            $key = '';
            $arr = (array) presspermit()->getOption('edd_key');

            return (isset($arr['license_key'])) ? $arr['license_key'] : '';
        };

        $container['LICENSE_STATUS'] = function ($c) {
            return presspermit()->keyStatus();
        };

		if (class_exists('PublishPress\EDD_License\Core\ServicesConfig')) {
	        $container['edd_container'] = function ($c) {
	            $config = new EDDServicesConfig();
	            $config->setApiUrl('https://publishpress.com');
	            $config->setLicenseKey($c['LICENSE_KEY']);
	            $config->setLicenseStatus($c['LICENSE_STATUS']);
	            $config->setPluginVersion(PRESSPERMIT_PRO_VERSION);
	            $config->setEddItemId(PRESSPERMIT_EDD_ITEM_ID);
	            $config->setPluginAuthor('PublishPress');
	            $config->setPluginFile(PRESSPERMIT_PRO_FILE);
	
	            $services = new EDDServices($config);
	
	            $eddContainer = new EDDContainer();
	            $eddContainer->register($services);
	
	            return $eddContainer;
	        };
	 	} else {
	 		$container['edd_container'] = false;	
	 	} 
    }
}
