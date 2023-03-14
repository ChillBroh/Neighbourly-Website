<?php
define( 'WP_CACHE', true );


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shamnsdu_wp125' );

/** Database username */
define( 'DB_USER', 'shamnsdu_wp125' );

/** Database password */
define( 'DB_PASSWORD', 'd)j8NtV!)S[p0g4]' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'b7vtvbbvmxykajdmvukkqr6cjktmugrbkrmtoeafnwzngdmvkji5imiduac9mpz7' );
define( 'SECURE_AUTH_KEY',  'plg6raxymcdx7vqiis0bypvkbyxiq2powplvsqmomeqozbrpzxr9cxzmik6eawrx' );
define( 'LOGGED_IN_KEY',    'dlkv0lvzjcpaedptbcvcaqi3ow3ohqurubiohmwtafk8g4xpqxxa6rc6uqw2htqn' );
define( 'NONCE_KEY',        'n5zfvcwwettee7lox6gsefcoe8b94yyb1fa6up5ntdf9tgr1yueotk80q4ocfsif' );
define( 'AUTH_SALT',        'cqpa5gnxzl1pwfjhjhxrypshmbqpfurjqhvk4k4vt2ilyfyevuhpelaiks0kqp7q' );
define( 'SECURE_AUTH_SALT', 'tjeizwijmvjubtqxgnioqixmueieaprg0zdaobf3vcb3defqkiikye4emuskyeyk' );
define( 'LOGGED_IN_SALT',   'erfekl4kubs3gb2ad586czvlymhyjqvxvndaug1fly0dm9fhmnorf5suqzxtpcey' );
define( 'NONCE_SALT',       '5wci4u7mriiftlalkpp9vhyek65mfnfsv3ycw1trrfhu7fv7cioxqlv5mxk3tii8' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpnr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
