<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit92539fdc77f0064083daeea58b26afd9
{
    public static $files = array (
        '320cde22f66dd4f5d3fd621d3e88b98f' => __DIR__ . '/..' . '/symfony/polyfill-ctype/bootstrap.php',
        'c92bf23a32412037ecdc51806b458c36' => __DIR__ . '/..' . '/alledia/edd-sl-plugin-updater/EDD_SL_Plugin_Updater.php',
        '0078757fbd019a5f202f2be6585c3626' => __DIR__ . '/..' . '/publishpress/wordpress-banners/BannersMain.php',
        '41c664bd04a95c2d6a2f2a3e00f06593' => __DIR__ . '/..' . '/publishpress/wordpress-reviews/ReviewsController.php',
    );

    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Twig\\' => 5,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Ctype\\' => 23,
        ),
        'P' => 
        array (
            'PublishPress\\EDD_License\\Core\\' => 30,
            'Psr\\Container\\' => 14,
            'PPVersionNotices\\' => 17,
            'PPAuthors\\YoastSEO\\' => 19,
            'PPAuthorsPro\\' => 13,
        ),
        'M' => 
        array (
            'MultipleAuthors\\' => 16,
            'MultipleAuthorBoxes\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Twig\\' => 
        array (
            0 => __DIR__ . '/..' . '/twig/twig/src',
        ),
        'Symfony\\Polyfill\\Ctype\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-ctype',
        ),
        'PublishPress\\EDD_License\\Core\\' => 
        array (
            0 => __DIR__ . '/..' . '/alledia/wordpress-edd-license-integration/src/core',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'PPVersionNotices\\' => 
        array (
            0 => __DIR__ . '/..' . '/publishpress/wordpress-version-notices/src',
        ),
        'PPAuthors\\YoastSEO\\' => 
        array (
            0 => __DIR__ . '/..' . '/publishpress/publishpress-authors/src/modules/yoast-seo-integration/src',
        ),
        'PPAuthorsPro\\' => 
        array (
            0 => __DIR__ . '/../..' . '/core',
        ),
        'MultipleAuthors\\' => 
        array (
            0 => __DIR__ . '/..' . '/publishpress/publishpress-authors/src/core',
        ),
        'MultipleAuthorBoxes\\' => 
        array (
            0 => __DIR__ . '/..' . '/publishpress/publishpress-authors/src/modules/author-boxes/classes',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
        'P' => 
        array (
            'Pimple' => 
            array (
                0 => __DIR__ . '/..' . '/pimple/pimple/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'MA_Author_Custom_Fields' => __DIR__ . '/../..' . '/modules/author-custom-fields/author-custom-fields.php',
        'MA_Author_Custom_Layouts' => __DIR__ . '/../..' . '/modules/author-custom-layouts/author-custom-layouts.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit92539fdc77f0064083daeea58b26afd9::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit92539fdc77f0064083daeea58b26afd9::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit92539fdc77f0064083daeea58b26afd9::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit92539fdc77f0064083daeea58b26afd9::$classMap;

        }, null, ClassLoader::class);
    }
}
