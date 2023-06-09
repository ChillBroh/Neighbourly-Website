=== PublishPress Authors: Show Multiple Authors and Guest Authors in an Author Box ===
	       	    	  		   		     	   	      
Contributors: publishpress, kevinB, stevejburge, andergmartins, ojopaul  
Author: PublishPress     		
Author URI: https://publishpress.com
Tags: multiple authors, authors, guest authors, author fields, author layouts
Requires at least: 4.7
Requires PHP: 7.2.5
Tested up to: 6.0
Stable tag: 4.1.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

PublishPress Authors is the best plugin for adding multiple authors and guest authors to WordPress posts. You can show authors with a box, widget, shortcode or Gutenberg block.

== Description ==

[PublishPress Authors](https://publishpress.com/authors/) allows you to show an author box at the end of your posts. This author box can display one author, multiple authors or even guest authors. This box has the author’s name, avatar, description and more. You can also place the author box in widgets, shortcodes and Gutenberg blocks.

Here are the three most important features of PublishPress Authors:

* **Author Box**. As soon as you install PublishPress Authors, you’ll see an author box under every post. You can add all the profile details you need for each author.
* **Multiple Authors**. By default, WordPress only allows one author per post. PublishPress Authors allows you to add an unlimited number of authors to each post. This is very useful if you have a busy site and need to manage and give credit to all your writers.
* **Guest Authors**. You can create Guest Authors who don’t have an account on your site. This is important because not all writers need a username and password.

= Multiple Authors and Co-Authors =

With PublishPress Authors, you can set multiple authors for each post. When you write a post, you’ll see a box in the right sidebar. Here you can choose from all the users on your site, and assign them as authors.

On the frontend of your site. PublishPress Authors gives you several different options to display the authors’ box:
* Replacing the default author display.
* At the bottom of your content.
* In a widget or a Gutenberg block.
* Using shortcodes.
* Adding filters and actions in your template files.

[Click here to read about displaying authors](https://publishpress.com/knowledge-base/display-multiple-authors/).

= Guest Authors =

Using PublishPress Authors, you can create Guest Authors who don’t need an account on your site. PublishPress will treat Guest Authors identically to Authors who are linked users.
You will be able to select and display Guest Authors in exactly the same way as for registered users. Each Guest Author can have a full profile, plus an avatar, and their own archive page for blog posts.
[Click here to see how to create Guest Authors](https://publishpress.com/knowledge-base/add-guest-authors-wordpress/).

= Multiple Layout Options for Author Profiles =
PublishPress Authors provides five default ways to display the author profiles on your site.
In the PublishPress Authors settings you can choose from these layouts:

* Simple list
* Boxed
* Centered
* Inline
* Inline with Avatars
[Click here to see details on all the layout options](https://publishpress.com/knowledge-base/layout/)

= Custom Fields for Author Profiles (Pro version) =

PublishPress Authors Pro enables you to create custom fields and enhance your author profiles.
You can add Text, WYSIWYG, Link and email address fields. Then you can place those fields in author profiles using custom layouts.

= Custom Layouts for Author Profiles (Pro version) =

PublishPress Authors enables you to build custom layouts for your author profiles.
Using all your author information and custom fields, you can design beautiful layouts for your authors. Each layout is editable using HTML and PHP. You can add many different types of author information to these layouts including custom fields.
[Click here to see how to customize author layouts](https://publishpress.com/knowledge-base/custom-layouts/).

=  Bug Reports =
Bug reports for PublishPress Authors are welcomed in our [repository on GitHub](https://github.com/publishpress/publishpress-authors). Please note that GitHub is not a support forum, and that issues that aren’t properly qualified as bugs will be closed.

= Follow the PublishPress team =
Follow PublishPress on [Facebook](https://www.facebook.com/publishpress), [Twitter](https://www.twitter.com/publishpresscom) and [YouTube](https://www.youtube.com/publishpress).

= Thank You =
This plugin is partly based on Co-Authors Plus, which includes the work of batmoo, danielbachhuber and automattic. This plugin also uses work from the Bylines plugin by danielbachhuber.


== Installation ==
There are two ways to install the PublishPress Authors plugin:

**Through your WordPress site's admin**

1. Go to your site's admin page;
2. Access the "Plugins" page;
3. Click on the "Add New" button;
4. Search for "PublishPress Authors";
5. Install PublishPress Authors plugin;
6. Activate the PublishPress Authors plugin.

**Manually uploading the plugin to your repository**

1. Download the PublishPress Authors plugin zip file;
2. Upload the plugin to your site's repository under the *"/wp-content/plugins/"* directory;
3. Go to your site's admin page;
4. Access the "Plugins" page;
5. Activate the PublishPress Authors plugin.

== Usage ==
- Go to admin page, click on the "Authors" menu and create new author profiles.
- Go to write a new post and you'll see the box for selecting multiple authors in the sidebar.

== Changelog ==

= [4.1.2] - 31 Jan 2023 =

* Update: Add "SameAs" schema option to links, #1189
* Fixed: Compability Issue with beaver builder, #1227
* Update: Remove domain translation from "Recent Posts" and "Author" in favour of WordPress translation, #1194
* Fixed: Issue with author box styles when multiple author box is on the same page, #1208
* Update: Add fallback field for [publishpress_authors_data] shortcode, #1150
* Update: Make Author Box edit page responsive, #1172
* Fixed: PHP Warning – Undefined array key “url”, #1190
* Fixed: Can't use HTML in Author Boxes Bio, #1175
* Update: Remove Edit bulk action Author Box screen, #1173
* Update: Replace "Biographical Info" with "Author Bio", #1176
* Update: ES-FR-IT Translations Updates January 2023, #1177

= [4.1.1] - 16 Jan 2023 =

* Update: Update Author Pages Schema to Person Schema type, #1163
* Fixed: Incorrect display name is being used for schema, #1160
* Update: Extra text for "Display Name" field, #1161
* Update: ES-FR-IT Translations Updates January 2023, #1177

= [4.1.0] - 04 Jan 2023 =

* Update: Integrate PublishPress Authors with Yoast, #1102
* Update: Add support for structured data for authors for RankMath SEO Plugin, #391
* Fixed: Post Author widget not updating, #1122
* Update: Accessibility improvements for links, #1138
* Update: Add "archive" parameter to [publishpress_authors_data] shortcode, #1136
* Update: Rename public methods for better clarity and avoiding name conflicts, #520 https://publishpress.com/knowledge-base/deprecated-functions/
* Fixed: Issue with author boxes profile field background color, #1128
* Update: Add author pages excerpt ellipsis in settings, #1124
* Update: Add new before and after prefix or suffix for author boxes profile fields, #1119
* Update: Move function generatepress_author_output to a new module, #587
* Fixed: Code looking for wrong function before getting multiple authors in the author box, #571
* Update: Italian Translation Update December 2022, #1145

= [4.0.1] - 06 Dec 2022 =

* Fixed: Icon does not hide when there is no value, #1103
* Fixed: Author pages pulling excerpts from content, #1112
* Update: Allow to set author's page post limit, #1108
* Fixed: Author Field Link is not Active link, #1105
* Fixed: Link does not rendered on WYSIWYG field, #1101

= [4.0.0] - 29 Nov 2022 =

* Update: Added last_article_date to publishpress_authors_list shortcode [publishpress_authors_list last_article_date="1 year ago"]
* Update: Allow to set Author Boxes previewing authors, #913
* Update: Added group by field name to authors_index [publishpress_authors_list layout="authors_index" group_by="last_name"], #977
* Update: Allow Author list to have 2 columns for custom layout [publishpress_authors_list layout="boxed" layout_columns="2"], #996
* Fixed: Issue with Translatepress + WPUlike, #962
* Update: Make new "Boxed" the default layout, #980
* Fixed: Authors causing custom post type and taxonomy archives SEO title to be untitled, #1013
* Fixed: Authors_Iterator call in Author_box.php assumes that $post global is populated (which it isn't sometimes) #999
* Update: Change author 'Name' label to 'Display Name', #991
* Update: Remove the "All dates" feature in Author Boxes, #990
* Update: Add Required / Optional settings to Author fields, #1066
* Fixed: An incongruence in the line 170 between singular and plural, #982
* Update: Change name of Settings to PublishPress Authors, #981
* Fixed: Documentation link missing for Author boxes generate template, #978
* Update: Remove Legacy options and "Layouts" menu, #960
* Update: Add a Pro sidebar, #1050
* Update: New "Advanced" tab in settings, #1020
* Update: Add Dashicons and Fontawesome icon pages link to Author Boxes profile icon field, #1064
* Update: Move Author Bio up the "Author Profile" screen, #1058
* Update: Display Pro banner on Boxes and Fields screen, #1052
* Update: Rename and add option to hide Author Box Display Name, #1057
* Update: Rename Author Boxes "Author Bio" to "Biographical Info", #1056
* Update: Use "Avatar" on Profile tab, #1060
* Update: Authors_ES-IT_Translation_Update-19-October 2022, #979
* Update: FRENCH_Translation Update_Authors 20 October2022, #984

= [3.30.1] - 03 Nov 2022 =

* Update: Added last_article_date to publishpress_authors_list shortcode [publishpress_authors_list last_article_date="1 year ago"]
* Update: Allow to set Author Boxes previewing authors, #913
* Update: Added group by field name to authors_index [publishpress_authors_list layout="authors_index" group_by="last_name"], #977
* Update: Allow Author list to have 2 columns for custom layout [publishpress_authors_list layout="boxed" layout_columns="2"], #996
* Fixed: Issue with Translatepress + WPUlike, #962
* Update: Make new "Boxed" the default layout, #980
* Fixed: Authors causing custom post type and taxonomy archives SEO title to be untitled, #1013
* Fixed: Authors_Iterator call in Author_box.php assumes that $post global is populated (which it isn't sometimes) #999
* Update: Change author 'Name' label to 'Display Name', #991
* Update: Remove the "All dates" feature in Author Boxes, #990
* Fixed: An incongruence in the line 170 between singular and plural, #982
* Update: Change name of Settings to PublishPress Authors, #981
* Fixed: Documentation link missing for Author boxes generate template, #978
* Update: Authors_ES-IT_Translation_Update-19-October 2022, #979
* Update: FRENCH_Translation Update_Authors 20 October2022, #984

= [3.30.0] - 18 Oct 2022 =

* Feature: Add new improved layouts (Author Boxes), #896
* Update: Deprecate Twig layout as legacy, #758
* Fixed: Authors plugin causes a fatal error and prevents pages from loading, #863
* Update: Remove "Layouts" promo link, #959
* Update: Remove Author Recent and Author Index from layout list, #956
* Update: Move Disable the "Authors" box when using "Quick Edit" to General tab, #953
* Fixed: Small settings typo, #955
* Update: Add an ALT Text for the avatars, #931
* Update: Allow users to disable Authors Box in Quick Edit, #897
* Update: Add descriptive text to Authors links, #807
* Update: Prevent some critical error on wp api author response, #898
* Update: authors-IT-translation-update_september2022, #899
* Update: Authors-FR-TranslationUpdate-September2022, #908
* Update: NewAuthors-Version3.22.0-ES-FR-IT-TranslationUpdate-7October2022, #932

= [3.23.0] - 3 Oct 2022 =

* Update: Upgrade twig to v1.44.7, #921
* Update: Update minimum php requirement to PHP 7.2.5

= [3.22.0] - 1 Sep 2022 =

* Update: Added avatar to publishpress_authors_data shortcode [publishpress_authors_data field="avatar"]  #887
* Update: Added settings to disable mapped user check when creating author, #885
* Update: Added First Name to Authors REST API data #877
* Update: Added Last Name to Authors REST API data #877
* Update: Added User Biography to Authors REST API data #877
* Update: Added Custom fields to Authors REST API data #877
* Update: Authors_ES_FR_IT_Translations_August17-2022, #876

= [3.21.1] - 23 Aug 2022 =

* Fixed: Empty author result when using [publishpress_authors_list] shortcode, #878

= [3.21.0] - 17 Aug 2022 =

* Update: Improved REST API support, #509
* Feature: Add profile field sorting options to the Authors List (first_name last_name custom_field_slug), #257
* Update: Add shortcode to display specific authors using [publishpress_authors_data term_id="102"], #556
* Update: Allow user to change author pages headers (H1, H2, H3, H4, H5, H6), #832
* Update: Allow users to disable the title for Authors Pages, #833
* Update: Improve design for layout shortcodes, #844
* Update: Add avatar_url to Post Author REST API, #837
* Fixed: Double widget header title div for authors list widget, #852
* Fixed: New taxonomy box showing for Authors, #866
* Fixed: Issue with Easy Digital Download and Authors installed together, #865
* Fixed: Double submit button in php 8.1.6 author screen, #861
* Fixed: SEO Framework plugin integration errors, #709
* Fixed: Broken closing div in author page, #841
* Update: Authors-ES-FR-IT- Translation-Update-August2022, #847

= [3.20.1] - 08 Aug 2022 =

* Feature: Added 'search_box' option to authors shortcode and widget, #780
* Feature: Added 'search_field' option to authors shortcode and widget, #780
* Feature: Added pagination and Search to all defaults layout, #819
* Feature: Added search box and search field option to authors list widget #822
* Fixed: Conflict with PublishPress Calendar, #818
* Update: Allow users to edit "Authors Recent", "Authors Index" and default layouts, #801
* Update default layout in authors pro, #820
* Update: ES-FR-IT translation updates, #804

= [3.20.0] - 28 Jul 2022 =

* Fixed: Bulk edit not working, #741
* Feature: Added 'authors_recent' layout for Authors List, #124
* Feature: Added 'authors_index' layout for Authors List, #124
* Feature: Added 'limit_per_page' option to authors shortcode and widget, #788
* Feature: Added 'show_empty' option to authors shortcode and widget, #788
* Feature: Added 'authors' option to authors shortcode and widget, #788
* Feature: Added 'order' option to authors shortcode and widget, #788
* Feature: Added 'orderby' option to authors shortcode and widget, #788
* Feature: Added 'authors_recent_col' to authors shortcode and widget, #788
* Feature: Add new options to author list widget, #788
* Update: Italian and spanish translation update, #772

= [3.19.1] - 18 Jul 2022 =

* Feature: Add a setting for selecting Fallback user for Guest Authors, #743
* Feature: Allow users to limit the length of a bio in a layout using author.get_description(150), #754
* Fixed: Conflict between All in one SEO and PublishPress Authors Pro, #762
* Update: Updated Spanish and Italian translation files, #757
* Fixed: Empty space between categories is missing, #753
* Update: Change "Display" tab to "Author Boxes" in settings, #755
* Update: Remain on active tab after updating settings, #746

= [3.19.0] - 27 Jun 2022 =

* Feature: Added new Author Profile Pages, #417
* Added: Settings tab for "Author Pages", #729
* Update: Authors taxonomy queries improvement, #527
* Added: Added filter to authors rest response, #726

= [3.18.0] - 13 Jun 2022 =

* Fixed: Allow authors to have the same name, #682
* Added: Extend [publishpress_authors_data] shortcode to return authors user object, #697
* Fixed: Search box doesn't accept ' characters in username, #699
* Added: Add Authors important menu link to plugin row, #714
* Fixed: Author menu missing in admin menus, #715
* Fixed: PHP 7.2 compability, #711
* Added: Add [publishpress_authors_list] shortcode to the Free version, #706
* Fixed: Most important buttons should be yellow only, #704
* Fixed: Author Box shortcode is in the wrong place, #695
* Fixed: Small typo in shortcode, #693

= [3.17.0] - 30 May 2022 =

* Added: Option to enable/disable loading font awesome assets in frontend, #625
* Added: Support for user fields WPML translations, #642
* Added: Add new shortcode [publishpress_authors_data] which can be used to display the author names or any profile field, #673
* Fixed: Multiple Authors Compability with Yoast SEO authors's title, #672
* Update: Change [author_box] to [publishpress_authors_box] in shortcode tab, #670

= [3.16.3] - 18 May 2022 =

* Added: Add an Author Filter for Posts, #90
* Update: Enable Author Profile for Administator and other roles with 'ppma_manage_authors', #649
* Added: Add a shortcodes tab to settings, #641
* Update: Run the WordPress VIP scans on Authors, #639

= [3.16.2] - 09 May 2022 =

* Fixed: Fix incorrect "Mine" counter in admin posts list, #591
* Fixed: Fix error with subscribers/non admin inability to see see Author page posts, #584
* Added: Add metabox to control author display on pages #60
* Added: Added Author Profile URL #616
* Update: Use built-in capability check when searching users via ajax, #645
* Added: Disable Free version with Pro is active #615

= [3.16.1] - 13 Apr 2022 =

* Fixed: Fix author mapped to user error when adding new author, #626;
* Fixed: Fix test for checking the author link in the frontend;
* Fixed: Fix Undefined array key "tag-name" when bulk delete all authors, #628;
* Fixed: Fix Fatal error when "Create missed post authors" button is clicked, #623;
* Fixed: Fix author profile allowing to add html tags in the bio text, #619;

= [3.16.0] - 23 Mar 2022 =

* Added: Add option to authors update their own profile, #24;
* Fixed: Fix new author form not allowing to map a user to multiple authors, #64;
* Fixed: Fix PHP notice Constant PP_WP_BANNERS_VERSION already defined, #603;
* Fixed: Improve the selection of avatar for authors, making it clear if is using gravatar or custom image, #564;
* Fixed: Updated Italian translation files;
* Fixed: Fix the code editor for Layouts which was not loading, #604;
* Fixed: Fix small extra spacing in image link, #607;
* Fixed: Fix description field that were displayed in the author profile after navigating throw the tabs, #605;
* Changed: Increased the font size in the code editor for Layouts;
* Changed: Updated the Ace library, the code editor for Layouts, from v1.4.8 to v1.4.14;

= [3.15.1] - 17 Mar 2022 =

* Fixed: Fix fatal error: Cannot declare class PublishPress\WordPressBanners\BannersMain;

= [3.15.0] - 16 Mar 2022 =

* Fixed: Fix error where secondary authors were dropped off the posts if loading author pages on sites using plain permalinks, #593;
* Fixed: Fix error when trying to create an author for user that already is author, #592;
* Fixed: Abort author creation if user is empty;
* Fixed: Removed redundant check for existent user when creating author from user;
* Fixed: Fix compatibility with Elementor Pro and archive page title checking the constant "PUBLISHPRESS_AUTHORS_DISABLE_FILTER_THE_AUTHOR", if true, disables the "the_author" filter, #563;
* Fixed: Fix nonce validation all over the plugin;
* Fixed: Fix input sanitization all over the plugin;
* Fixed: Fix output escaping;
* Fixed: Added additional capability check before running maintenance tasks: manage_options;
* Fixed: Added capability check before allowing to search users and authors in the admin: ppma_edit_post_authors;
* Fixed: Improved data escaping and sanitization on a few queries;
* Fixed: Improved performance removing redundant plugin version option update on every request, #588;
* Fixed: Improved upgrade and install routines to not run on front-end requests, only in the admin, #589;
* Fixed: Fixed many WP Vip PHPCS warnings and errors;
* Removed: Remove not used method "MA_Settings::helper_print_error_or_description";
* Removed: Remove commented code from WP_Cli class;
* Removed: Remove deprecated class "PublishPress\Addon\Multiple_authors\Classes\Integrations\RSS";
* Changed: Deprecated function "get_multiple_authors", which is replaced by "get_post_authors" and "get_archive_author";
* Changed: Added conditional looking for WP_DEBUG = true before logging some errors;
* Fixed: Fix WordPress Banners library using autoload to fix an issue about file not found "BannersMain.php" on the Pro plugin, or sites that rely on Composer;

= [3.14.10] - 16 Mar 2022 =

* Fixed: Fix the character "&" in the Bibliographical Info field, which was converted to "&amp;", #566;
* Fixed: Fix PHP 8 compatibility addressing the error: PHP Fatal error: Uncaught TypeError: array_key_exists, #585;
* Fixed: Fix avatar URL on the structured data schema, #552;
* Fixed: Fix PHP error generated when method create_from_user was called for a post with post_author = 0;
* Fixed: Fix compatibility with Elementor Pro and the archive page title adding new constant to disable the filter "the_author", #563;
* Fixed: Fix fatal error on method_exists, argument should be object|bool, #590;
* Fixed: Sanitize some nonce tokens for a second layout of protection;
* Fixed: Fix PHP 8 fatal error about unsupported types: string + string, #559;
* Fixed: Fix PHP 7 warning about non-numeric value encountered, #560;
* Fixed: Fix PHP warning about trying to get property term_id of non-object, #562;
* Fixed: Fix PHP 8 fatal error Attempt to assign property "userObject" on bool, #561;
* Fixed: Fix the banner about PublishPress Blocks that was displayed even if Blocks is already activated, #549;
* Changed: Error log messages are only added if WP_DEBUG is enabled;

= [3.14.9] - 18 Nov 2021 =

* Fixed: The author profile URL for guest authors was not added to the schema for Google rich results with Yoast SEO, #545;
* Fixed: PHP Fatal error: Call to undefined method stdClass::get_avatar_url(), #544;
* Fixed: Call to undefined method stdClass::is_guest() in rest-api.php, #546;
* Changed: Show the reviews banner on any admin page;

= [3.14.8] - 04 Nov 2021 =

* Fixed: HTML special chars in the author name are not displayed correctly, #531;
* Fixed: Access denied while creating posts with contributor and another user as default author, #534;
* Fixed: Fix duplicated prefix for text elements with dynamic content on Divi builder, #528;
* Fixed: Remove gap in the settings tabs, #532;
* Fixed: Fix style for buttons in the settings page, #537;
* Fixed: Make "View All Posts" translatable, #530;
* Added: Add notice asking for a review;

= [3.14.7] - 21 Sep 2021 =

* Fixed: Fix robots meta tag when Yoast SEO is installed and it is not the authors page, #508;
* Fixed: Can't save multiple authors if Yoast SEO is activated, #504;
* Fixed: Only allow mapping authors to users who have edit_posts capability, #492;
* Fixed: Convert author to guest author when its user is deleted, #505;
* Fixed: Secondary author's comments remain as awaiting moderation, #469;
* Fixed: Restore the CLI command: assign-coauthors, but renaming to assign-author-by-meta-key, #438;
* Fixed: Authors mapped to user are treated as as guest authors after removing all other authors in the post edit page, #523;
* Fixed: PHP notice: Trying to get property of non-object in Post_Editor.php on line 293, #521;

= [3.14.6] - 14 Sep 2021 =

* Fixed: Fix the output of guest authors data on the frontend, #500;
* Fixed: Fix "get_multiple_authors" resulting on error 500 when post author is zero, #511;
* Fixed: Fix PublishPress Calendar integration with guest authors to avoid empty value on "post_author", #512;
* Fixed: Fix PHP Notice: Trying to get property 'display_name' of non-object on authors column for post_author = 0, #514;
* Fixed: Fix Yoast SEO structured data schema. Bumped min Yoast SEO version to 14.0, #472;

= [3.14.5] - 01 Sep 2021 =

* Fixed: Fix query for author posts doesn't work if instead of the author name we have the author ID or term ID, #487;
* Fixed: Fix reduced font size for the author description, #435;
* Fixed: Fix error message when post is not found, showing warning about "post_author" and "post_type" on null, #495;
* Fixed: Fix the selection of fallback user for guest authors in the posts bulk edit form, #497;
* Fixed: Fix PHP warnings for the shortcode "authors_list", used in the Pro plugin, #498;
* Fixed: Add "author" taxonomy to Polylang, #18;

= [3.14.4] - 19 Aug 2021 =

* Fixed: Fix author profiles that are automatically created for users that are not on the selected user roles, #464;
* Fixed: Fix authors not created when registered from the frontend for the selected user roles, #420;
* Fixed: Fix guest authors compatibility with YoastSEO archive pages and the "robots" tag, #471;
* Fixed: Fix PHP notice: Trying to get property 'name' of non-object in Utils.php, #485;
* Fixed: Fix PHP notice: Trying to access array offset on value of type bool in class-wp-list-util.php, #486;

= [3.14.3] - 01 Aug 2021 =

* Fixed: Add class "bypostauthor" for secondary authors on comments, #154;
* Fixed: Fixed the author byline on 3rd party themes in the front-end, #473;
* Added: Added CSS class with the author slug to each author in the default layouts;

= [3.14.2] - 21 Jul 2021 =

* Fixed: Fix error on block editor for posts with guest authors, #463;

= [3.14.1] - 20 Jul 2021 =

* Changed: Invert position of Edit User and Edit Author Profile links in the term actions, #453;
* Fixed: Fix sanitization of the user_id before adding it to a query;
* Fixed: Fix compatibility with the search results on the plugin "Knowledge Base for Documents and FAQs" when an article is not found;
* Fixed: Fix compatibility with PublishPress' calendar create item form for the author field, to select guest or mapped to user authors;
* Fixed: Add compatibility with PublishPress' calendar to support multiple authors in the calendar form;
* Fixed: Fix the warning: Undefined array key "post" in multiple-authors.php file, when opening the General settings page, #459;

= [3.14.0] - 26 May 2021 =

* Added: Added new setting for selecting multiple post types to display in the author page, #436;
* Added: Added new function "get_by_id" to the Author class, accepting positive integer for User ID, and negative integer for term ID, #423;
* Changed: Shortcode [author_box] was renamed to [publishpress_authors_box], #426;
* Changed: Shortcode [ppma_test] was renamed to [publishpress_authors_test], #426;
* Changed: Shortcode [authors_list] was renamed to [publishpress_authors_list], #426;
* Changed: Legacy shortcodes are loaded by default, but defining the constant PUBLISHPRESS_AUTHORS_LOAD_LEGACY_SHORTCODES = false will prevent to load them, #426;
* Fixed: Fix the Author::get_avatar_url method returning the avatar URL, #443;

= [3.13.2] - 22 Apr 2021 =

* Fixed: Fix the color scheme for the Pro plugin, #411;
* Fixed: Fix the links style for the boxed and centered layouts, #414;
* Fixed: Hide the core author field in the post edit pages and add field to set a user as author if a post has only guest authors, #344;
* Fixed: Fix relationship between post and author if not existent when running the function "get_multiple_authors". It fallbacks to the current post author, creating the Author term and relationship with the post, #396;
* Fixed: Fix the CLI subcommand list-posts-without-terms adding support for the following arguments: [--post_type=<ptype>] [--posts_per_page=<num>] [--paged=<page>] [--order=<order>] [--orederby=<orderby>], #415;
* Fixed: Fix the CLI subcommand create-terms-for-posts adding support for the following arguments: [--post_type=<ptype>] [--posts_per_page=<num>] [--paged=<page>], #415;
* Changed: Temporarily disabled the CLI subcommands: update-author-terms, assign-coauthors, assign-user-to-coauthor, reassign-terms, rename-coauthor, swap-coauthors, remove-terms-from-revisions, #415;

= [3.13.1] - 18 Mar 2021 =

* Fixed: Fix syntax error in the built package for the latest release.

= [3.13.0] - 18 Mar 2021 =

* Added: Added the post terms support in layouts, for displaying them or using on conditionals, #384;
* Added: Add bulk action to auto map authors to user based on the slug, #347;
* Added: Improve layout for Centered box and add a color picker to choose a base color, #376, #377;
* Added: Added new filter to extend the "post" variable exposed to the layouts. The new filter: "publishpress_authors_layout_post_properties", #384;
* Fixed: Fix the Authors List widget sorting by the author name, #389;
* Fixed: Fixed Notice: Undefined index: title_plural in the Widget.php file, #393;
* Fixed: Error Cannot access private property MultipleAuthors\Classes\Objects\Author::$term_id, #386;
* Fixed: The authors field is not displayed for custom post types created by Toolset, or other plugins, #385;
* Fixed: Fix link for authors in the Genesis Framework Featured Posts widget, #378;
* Fixed: PHP Warning: in_array() expects parameter 2 to be array, string given "multiple-authors/multiple-authors.php" #402;
* Fixed: PHP Fatal error: Uncaught Error: [] operator not supported for strings in MA_Multiple_Authors->filter_workflow_receiver_post_authors #403;
* Changed: Change the default layout to "boxed", #370;

= [3.12.0] - 23 Feb 2021 =

* Added: Added new shortcode: authors_list. It displays a list of all authors, and accept a "layout" argument, #338;
* Added: Added filters for customizing the byline on Elementor skins: publishpress_authors_elementor_posts_skin_cards_byline, publishpress_authors_elementor_posts_skin_classic_byline, #335;
* Changed: Improved the style for the Boxed layout, #332;
* Changed: Automatically sync the author URL with the user nicename when the user is saved, #53;
* Fixed: Fixed encoding of UTF-8 chars in the Author URL column in the Authors list, #352;
* Fixed: Fixed PHP warnings on Nested Pages plugin, #345;
* Fixed: Improved performance on author pages reducing the number of database queries only looking for an author taxonomy if a user was not found;
* Fixed: Fix compatibility with the SEO Framework archive title for guest authors, #351;
* Fixed: Fixed the query to list authors considering only published posts, #350;
* Fixed: Fixed warning about undefined index: ID, the rest-api.php file, #342;
* Fixed: Fix PublishPress notifications for guest authors with email address, #349;
* Fixed: Fix the PHP warning "Call to a member function get_user_object() on bool", #348;
* Fixed: Duplicated queries caused by multiple calls to "get_user_by" for the same slug, #343;
* Fixed: Fix the authors list widget form removing not used field, #339;
* Fixed: Fix error: "Twig file not found" for shortcodes in the Pro version using a custom layout. And avoid to show the authors twice if Free and Pro are activated, #336;
* Fixed: Fix compatibility with WP Engine object cache, #327;
* Fixed: Fixed the invalid taxonomy error message, #326;
* Fixed: Improved performance on author pages reducing the number of database queries only looking for an author taxonomy if a user was not found;
* Fixed: Fix the Authors List widget title alignment wrapping it on a H2 tag;

= [3.11.0] - 25 Jan 2021 =

* Added: Added fields for setting the plural and single title to the author box and widget, #75;
* Added: Added Rest API support to list the post's authors, #311;
* Added: Added new action to set authors to a post: "publishpress_authors_set_post_authors";
* Added: Added filter and constant for specifying to not load styles in the frontend, so users can use their own styles, #313;
* Added: Added Italian language files. Thanks to Angelo Giammarresi;
* Added: Added more automated tests;
* Changed: Updated Brazilian Portuguese language files;
* Fixed: Improved general performance removing unnecessary permissions validation on every text in the page, #325;
* Fixed: Improved general performance ignoring the body class change method if not in the frontend;
* Fixed: Fixed support to PHP 5.6 downgrading the Twig's requirement "symfony/polyfill-ctype" to v1.19, the last one that supports PHP 5, #323;
* Fixed: Fixed support to PHP 5.6 downgrading "pimple/pimple" to v3.2.3, the last one that supports PHP 5, #323;
* Fixed: Removed meaningless warnings when the post doesn't have an author: "[PublishPress Authors] Warning - The link for the author_id="" was changed to the post page because the author is not specified in the given url", #308;
* Fixed: If the post doesn't have an author term, the function filter_author_link doesn't recognized the user from "post_author" as author of the post, #308;
* Fixed: If the post doesn't have an author term, the function "get_multiple_authors" returns a WP_User instance (based on "post_author") even if the user is mapped to an author term, #306;
* Fixed: In the function "is_multiple_author_for_post", recognize user as author of a post even if he doesn't have a term, #307;
* Fixed: One test is trying to create a term which already exists, logging the error message: "A term with the name provided already exists";
* Fixed: Fixed multiple footers displayed when both Free and Pro are activated, #312;
* Fixed: Fix PHP error when an older version of YoastSEO is installed and the warning "not compatible YoastSEO" is showed;

= [3.10.0] - 15 Dec 2020 =

* Fixed: Changed the way we sync post_author column: Current user will only be set as author if no terms where found for the post, or there are only guest authors. If post_author is empty, we set it for the current user, creating an author term for it, #286.
* Fixed: Duplicated queries for the same given email in the method MultipleAuthors\Classes\Author_Utils::get_author_term_id_by_email(). Added a cache for the query results and an option to ignore the cache, #293;
* Fixed: Performance issue. Optimized some methods and modules loading for reducing the server overload and reduce duplicated queries. Some modules now are only loaded if the required plugin is installed, #297;
* Fixed: Fix the path for the template-tags.php file when called by the author box, if not loaded yet;
* Fixed: Only register admin hooks if in the admin, #297;
* Fixed: Fixed JS warning about variable being implicitly defined;
* Fixed: Fixed compatibility issue with Select2 library loaded by WS Form Plugin, #292;
* Fixed: Improved performance when opening the post edit page and quick edit panel for sites with thousands of authors;
* Changed: Deprecated functions and classes now can be disabled if you define the constant "PUBLISHPRESS_AUTHORS_LOAD_DEPRECATED_LEGACY_CODE" as false. Default is true, #297;
* Changed: CoAuthors' backward compatibility functions now can be disabled if you define the constant "PUBLISHPRESS_AUTHORS_LOAD_COAUTHORS_FUNCTIONS" as false. Default is true, #297;
* Changed: Bylines' backward compatibility functions now can be disabled if you define the constant "PUBLISHPRESS_AUTHORS_LOAD_BYLINES_FUNCTIONS" as false. Default is true, #297;
* Added: Added new maintenance task for syncing the authors' slug with the respective user's sanitized login (user_nicename). There is a new constant "PUBLISHPRESS_AUTHORS_SYNC_AUTHOR_SLUG_CHUNK_SIZE" for customizing the size of the chunk of authors to update at a time (default to 50), #287;
* Added: Added new constant "PUBLISHPRESS_AUTHORS_SYNC_POST_AUTHOR_CHUNK_SIZE" for defining the size of the chunck of posts to convert authors in the maintenance task: Update author field on posts. Default to 10;
* Removed: Removed the support to the filter "coauthors_auto_apply_template_tags", #297;

= [3.9.0] - 25 Nov 2020 =

* Added: Added support to Bulk Edit for authors in the post list, #263 and #280;
* Fixed: Fixed maintenance tasks to consider all the selected post types and not "post" only, #276;
* Fixed: Fixed compatibility issue with the WP RSS Aggregator plugin, #278;
* Fixed: Restored the posts count in the Authors and Users list, #275;

= [3.8.1] - 05 Nov 2020 =

* Fixed: Fixed the consistency of avatar dimensions between the img tag attributes and the CSS, #258;
* Fixed: Fixed edit_posts permission check for the PublishPress calendar, #264;
* Fixed: Restored the post count column in the Authors list, #95;
* Changed: Added the "raw" filter to the author's description by default on fresh installations, #267;

= [3.8.0] - 07 Oct 2020 =

* Fixed: Fixed PHP warning about undefined "default_author_for_new_posts" attribute for the module options;
* Fixed: Fixed the empty setting field "Default author for new posts", #242;
* Fixed: Fixed empty post_author on posts saved without any author. The current user will be added as the author, #238;
* Fixed: Fixed post_author field on posts when saving posts to store the user ID of the first author, ignoring guest authors, #171;
* Fixed: Fixed support for authors and guest authors in the PublishPress' calendar and content overview filters, #249;
* Added: Added new maintenance task to sync post_author with author terms for all posts, #171;
* Added: Added basic support for multiple authors in the Ultimate Members plugin's posts, #251;
* Changed: Updated base plugin to v3.8.0;

= [3.7.3] - 21 Sep 2020 =

* Fixed: Fixed unresponsive author select box for new posts, #244;
* Changed: Updated base plugin to v3.7.3;

= [3.7.2] - 14 Sep 2020 =

* Fixed: Fixed the reordering issue on authors in the post edit page;
* Changed: Update the base plugin to v3.7.2;

= [3.7.1] - 11 Sep 2020 =

* Fixed: Fixed the authors field in the quick edit panel. It was displaying all authors instead of only the post authors, #236;
* Changed: Updated base plugin to v3.7.1;

= [3.7.0] - 10 Sep 2020 =

* Fixed: Fixed performance issue in the post list and edit page removing avatars from the authors fields, #227;
* Added: Added option to change the default author for new posts in the site, #50;
* Changed: Updated base plugin to v3.7.0;

= [3.6.3] - 04 Sep 2020 =

* Fixed: Fix error "Uncaught Error: Call to a member function add_cap() on null", #223;
* Changed: Update base plugin to v3.6.3;

= [3.6.2] - 03 Sep 2020 =

* Fixed: Fix error "Call to a member function get_error_message() on boolean", a regression bug result of the recent updates, #221;
* Changed: Update base plugin to v3.6.2;

= [3.6.1] - 03 Sep 2020 =

* Fixed: Fix admin notice for Co-Authors Plus displaying even when the plugin is not installed;
* Changed: Updated base plugin to v3.6.1;

= [3.6.0] - 03 Sep 2020 =

* Added: Added support to update authors for posts using the quick edit form, #180;
* Added: Added argument "$ignoreCache" to the get_multiple_authors;
* Added: Added new capability (ppma_edit_post_authors) to control who can edit post authors, #213;
* Added: Added an admin notice if Co-Authors Plus is installed asking to read the documentation for migrating data, #209;
* Fixed: Removed mentions to the old name: Multiple Authors;
* Fixed: Error message "The plugin does not have a valid header" in PHP 5.6, #215;
* Fixed: Optimize performance in the get_multiple_authors again, replacing a function call with a specific db query; #190;
* Fixed: Fixed Co-Authors Plus data migration after installing. We still require to manually run the maintenance task to migrate the data;
* Fixed: Fixed get_multiple_authors cache when no arguments are passed to the functions;
* Fixed: Fixed fatal error that happens when get_term returns an error;
* Fixed: Upgrade link and banner were displayed for all users with access to the admin, #208;
* Fixed: Fix the installer making it independent from the free plugin, #199;
* Changed: Update base plugin to v3.6.0;

= [3.5.1] - 20 Aug 2020 =

* Fixed: Avoid warnings regarding constants already defined;
* Fixed: Fixed the cache for the get_multiple_authors function for archive pages, #190;
* Fixed: Fixed fatal error Object of class WP_Error could not be converted to string, #182;
* Fixed: Fixed the value for $author->display_name which was returning the value from the user object instead of the custom value set for the author, #183;
* Fixed: Fixed Plugin::filter_user_has_cap() is passing a param to Util::get_current_post_type() which doesn’t support params, #187;
* Fixed: Fixed Plugin::filter_user_has_cap() to use the correct user, not the current one, #186;
* Fixed: Removed leftovers from the deprecated capability: ppma_edit_orphan_post, #193;
* Changed: Updated the base plugin to the v3.5.1;

= [3.5.0] - 06 Aug 2020 =

* Added: Added a new widget to display all the authors, #76;
* Added: Added option to display the username in the authors search field, #162;
* Fixed: Fix compatibility with WooCommerce products, #169;
* Fixed: Performance issue in the frontend. Added cache for queries that can run multiple times in the frontend, #171;
* Fixed: Fix PHP notice on author page when user is not an author, #156;
* Fixed: Fixed notice when a post doesn't exist after deleting the post, #167;
* Changed: Updated base plugin to 3.5.0;

= [3.4.0] - 23 Jul 2020 =

* Added: Added support to BuddyPress Profile link on custom layouts;
* Added: Add new filter "publishpress_authors_author_attribute" for customizing author attributes in the layouts;
* Fixed: Fix syntax on the file AUthor_Editor.php removing an invalid char;

= [3.3.2] - 13 Jul 2020 =

* Fixed: Fix the text domain loading, fixing the translations;
* Fixed: Fix "orphan" authors when the mapped user is deleted, converting them in guest authors, #142;
* Fixed: Fix infinity loop when user's and author's slug are different and you are trying to save an author profile, #143;
* Fixed: Fix hardcoded table prefix from a query, #146;
* Fixed: Fix error about missed Authors_Iterator class, #144;
* Changed: Updated the min PHP version to 5.6;
* Changed: Updated the WordPress tested up to version, to 5.4;
* Changed: Updated base plugin to 3.3.2;

= [3.3.1] - 27 May 2020 =

* Added: Added the static function "get_by_email" to the Author class for getting an author by his e-mail address;
* Changed: Improved error messages;
* Changed: Updated base plugin to 3.3.1;
* Fixed: Fatal error for WP < 5.4 due to the function "is_favicon" not being defined;
* Fixed: Fix the get_avatar_url output for authors with a custom avatar, #122;
* Fixed: HTML entities were not rendered in the frontend using the default author layouts, #123;
* Fixed: Secondary authors don't have the edit_others_posts capability for their own posts, #129;
* Fixed: Improved integration with PublishPress adding support for multiple authors in the calendar. #129, #131;
* Fixed: Updated the POT file;

= [3.3.0] - 05 May 2020 =

* Added: Some error messages are now added to the error log;
* Added: Added links to the slug column in the authors list to open the authors page in the frontend;
* Added: Added post data to the twig layout context - #112;
* Added: Added multiple authors support to the Elementor Pro, adding new skins to the Posts and Archive Posts widgets;
* Added: Added support to Divi's theme builder and dynamic data related to authors;
* Changed: Updated base plugin to 3.3.0;
* Changed: Reorganized the folder structure of the plugin moving the code to a "src" folder;
* Changed: Guest authors are now identified by author->ID < 0, which corresponds to the term_id. If ID > 0, it is a user, otherwise, an author term. This increases the compatibility rate with standard author functions;
* Fixed: Improved text and fixed typo in the data migration messages;
* Fixed: Added pointer cursor when hovering the "x" for removing authors from the list;
* Fixed: Fixed minor style issue in the Simple List layout CSS;
* Fixed: Centered avatar and fixed minor style issues in the Centered layout;
* Fixed: Removed the blank '-' char from the Simple List layout due to undefined "age" field;
* Fixed: Error message when the installed Yoast SEO doesn't have the function add_piece_language;
* Fixed: Detection of minimum required Yoast SEO version for the module to be activated, so the error message is not displayed if Yoast SEO is not installed;
* Fixed: Yoast SEO structured data was not displaying pages data correctly;
* Fixed: Yoast SEO structured data was not working well when a guest author was the first author in posts;
* Fixed: Yoast SEO structured data with incorrect @id for pages;
* Fixed: Fixed the method that implements the column for authors in the post list, to only run for enabled post types;
* Fixed: Fixed PHP Deprecated error for non-static method being called statically in the Term_Editor class;
* Fixed: Fixed the notice in the frontend saying the is_author was called incorrectly;
* Fixed: Empty output for shortcodes if the layout doesn't exists. Added fallback layout and an error message in the error log;
* Fixed: Wrong author data in the query for authors mapped to user;
* Fixed: The get_author_posts_url function was not working for guest authors;
* Fixed: The get_the_author_meta function was not working for guest authors;
* Fixed: The get_the_author_posts_link function was not working for guest authors;
* Fixed: The get_the_author function was not working for guest authors;
* Fixed: The the_post function was not working well for posts with guest authors;
* Fixed: The feed_links_extra function was not working for guest authors;
* Fixed: For themes that dont't implement support for PublishPress Authors and multiple authors, we were displaying all the author names separated by comma, but only one link (due to the limitations imposed by the theme). Now we display only the first author and its respective link on those cases. The multiple authors can be added creating a child theme and adapting the code;
* Fixed: The title for authors archive pages of guest authors;
* Fixed: The author object is now compatible with the main properties of WP_User objects, so guest authors can be treated as users on most cases;
* Fixed: The custom user_url is not returned for authors mapped to user;

= [3.2.6] - 13 Apr 2020 =

* Added: Button to migrate data from the Bylines (Daniel Bachhuber) plugin;
* Added: Button to migrate data from the Byline (Matt Dulin) plugin;
* Added: Added a body class for guest authors "author-<author_slug>" (#45);
* Fixed: Fixed the error displayed on Windows servers when the constant DIRECTORY_SEPARATOR is not defined;
* Fixed: Fixed compatibility with composer based sites;
* Fixed: Broken body class for guest authors "author-" (#43);
* Fixed: Wrong authors in the header of pages based on Genesis framework (#46);
* Fixed: Empty author headline for guest authors (#47);
* Fixed: Fixed some texts and style in the Co-authors plugin migration box;
* Fixed: Wrong author data in the Yoast SEO schema for structured data (#77);
* Fixed: Fixed author page title when using Yoast SEO (#80);
* Fixed: Fix the result of the function get_the_author_posts_link for supporting multiple authors;
* Changed: Renamed the name of the Widget, from Multiple Authors to Authors;
* Changed: Updated the EDD integration library to 1.6.19 to fix an error related to invalid argument supplied for foreach;
* Changed: Updated the base plugin to 3.2.4;


= [3.2.5] - 17 Mar 2020 =

* Fixed: Wrong URL for the file multiple-authors-widget.css;
* Fixed: Fixed the author page for compatibility to the Genesis framework;
* Added: Added new filter to bypass the installation and data migration on special cases;
* Changed: Updated the base plugin to 3.2.4-alpha.1;

= [3.2.4] - 27 Feb 2020 =

* Fixed: Not showing update notifications;

= [3.2.3] - 27 Feb 2020 =

* Fixed: Fixed error message if installed over PublishPress Multiple Authors v3.1.0 or older versions;

= [3.2.2] - 27 Feb 2020 =

* Fixed: Performance issue and high CPU usage;

= [3.2.1] - 25 Feb 2020 =

* Fixed: Undefined class Authors_Iterator, #26;
* Fixed: Error message related to Phing class file not found. Removed Phing from the package;
* Changed: Updated the base plugin to 3.2.2;

= [3.2.0] - 13 Feb 2020 =

* Fixed: Fixed default capabilities for the layouts and custom fields menu;
* Fixed: Fixed resetting password when user doesn't exists;
* Added: Added option to migrate authors from Co-Authors Plus;
* Added: Added methods to echo author and user meta in custom layouts;
* Added: Added new capabilities for the menu items: ppma_manage_authors, ppma_manage_custom_fields, ppma_manage_layouts;
* Added: Added filters for configuring the new capabilities: pp_multiple_authors_manage_custom_fields_cap, pp_multiple_authors_manage_layouts_cap, pp_multiple_authors_manage_authors_cap, pp_multiple_authors_manage_settings_cap;
* Added: Added new bulk action to convert mapped authors to guest authors;
* Added: Added current_user variable to show or create conditionals based on the user viewing the page;
* Added: Added new function for checking user's capabilities in custom layouts: current_user_can;
* Added: Added new function for getting the user's meta data in custom layouts: get_current_user_meta;
* Added: Added compatibility with PublishPress Capabilities Pro for displaying the new capabilities (requires 1.9.2+);
* Changed: Updated the base plugin to 3.2.1;

= [3.1.0] - 19 Nov 2019=

* Added: Added support to the function "do_shortcode" in the custom layouts;
* Added: Added a shortcode for testing the output in the frontend (ppma_test);
* Added: Expose the method "author.has_custom_avatar" method on custom layouts;
* Added: New argument for post ID in the action "pp_multiple_authors_show_author_box";
* Changed: Updated the EDD library;
* Fixed: The React library is being downgraded (overridden) in WP 5.3;

= [3.0.1] - 30 Sep 2019=

* Fixed: Backward compatibility issue with themes using the class PP_Multiple_authors_plugin and other legacy classes for custom layouts;
* Fixed: Wrong size for avatars in Twenty Nineteen theme and probably other themes where the author avatar is using the CSS class "photo" instead of "avatar" for the image;
* Fixed: JS error related to select2 being undefined;
* Fixed: The author field was not working if no author was set for new posts;
* Changed: Simplified the documentation on the sidebar for custom layouts;

= [3.0.0] - 24 Sep 2019=

* Changed: Converted to a standalone plugin removing any dependency of PublishPress. Some constants and methods where renamed to avoid name collisions;
* Added: Custom fields for authors;
* Added: Custom layouts for customising the output;
* Added: New filter for customising the rendered author box markup: pp_multiple_authors_author_box_rendered_markup;
* Added: A warning message advising to update PressPermit Pro to the version 2.7.24 or later, if installed. This is not compatible with prior versions;
* Added: Menu item specific for Authors;
* Added: Settings field to hide the PublishPress brand in the admin;
* Fixed: The shortcode was not supported in the archive page for displaying the author box;
* Fixed: Incompatibility with legacy version of select2;
* Fixed: PHP notice when the capability "ppma_edit_orphan_post" was not defined;
* Fixed: WSOD in Gutenberg when a user tried to edit an orphan post (with no author);
* Fixed: Some style issues related to settings fields and delete button on author fields;
* Fixed: The query on author pages was catching diverse post types for logged in users with the capability ppma_edit_orphan_post;
* Fixed: Error in the author page regarding the class Author not being found;
* Fixed: Invalid rewrite rules being defined for custom post types, but not implemented;
* Fixed: Author page displaying auto-drafts for logged in authors;
* Fixed: Custom author's name being overwritten after select a mapped user;
* Fixed: The query for deleting Guest authors is not detecting/deleting authors with custom avatar;
* Fixed: Fix an issue related to wrong paths for assets in installations where ABSPATH = //;
* Changed: Improved the settings page adding tabs;
* Changed: The license key field was moved from PublishPress to the Multiple Authors Settings page;
* Changed: The filter "pp_multiple_authors_filter_author_box_markup" is deprecated in favor of "pp_multiple_authors_author_box_rendered_markup";
* Changed: Posts and Pages are enabled by default for Multiple Authors;
* Changed: Updated the POT file;
* Changed: Updated the text of notices for maintenance actions;

= [2.3.0] - 11 Feb 2019=

* Fixed the authors column removing it from unselected post types;
* Fixed the social icons in the frontend if not logged in;
* Fixed PT-BR translations (Thanks to Dionizio Bach);
* Fixed hardcoded table names in some queries;
* Added support to custom avatars for guest and user mapped authors;
* Added new inline layout with avatar;

= [2.2.0] - 14 Jan 2019=

* Added support for the attributes: "show_title" and "layout" in the shortcode "author_box";
* Added new layout: inline. This is good for using in theme builders or themes to replace standard author links. Fix support for Beaver Themer and Beaver Builder.
* Removed the legacy field for the license key;
* Fixed author metabox in the post form when the post has no author;
* Fixed Author column in the post for no author;
* Fixed the widget to not display anything if there is no author;
* Added option to create posts with no author by default;

= [2.1.3] - 19 Jul 2018 =

*Fixed:*

* Fixed upload of media files in a post for "secondary" authors if using multiple authors;

= [2.1.2] - 27 Jun 2018 =

*Fixed:*

* Fixed the author link for guest authors when using the function get_author_posts_url;
* Fixed the author display name for guest authors;

= [2.1.1] - 21 Jun 2018 =

*Fixed:*

* Fixed avatar after selecting an author for the post;
* Fixed the author page, making it filter correctly the author's posts;
* Fixed the permalinks structure after upgrading or installing the plugin;
* Fixed the submenu for Author which appeared in other post types;

= [2.1.0] - 12 Jun 2018 =

*Fixed:*

* Fixed filter for custom output on author boxes;
* Fixed PHP warnings;
* Fixed the change of posts/authors to only modify the queries if the post type is selected;
* Fixed menu structure when the calendar and other modules are disabled;
* Fixed hardcoded version number when loading some scripts;
* Fixed the author page if called without the author_id in the URL;
* Fixed minor details in the style of pages;
* Fixed migration of data when installing or updating to link correctly to posts;
* Fixed the Author class adding the missed ID property;
* Fixed fatal error when running 5.4, related to the Initialized class in the add-on framework library;

*Changed:*

* Changed minimum version required of PublishPress to 1.14.0;

*Added:*

* Added bulk action to update the author data for author with mapped users;
* Added buttons in the settings to reset the authors terms (for maintenance). Multiple authors are removed from posts, Guest authors are removed. Authors are created from users selected as authors in the posts, defined in the post_author field, and from the specific roles, if configured;
* Added chosen JS script for add-ons;
* Added some error messages to the log when there is an issue looking for the author of the post;

= [2.0.3] - 18 May 2018 =

*Fixed:*

* Fixed a fatal error on some environments;

= [2.0.2] - 16 May 2018 =

*Fixed:*

* Fixed duplicated authors generated with a prefix "cap-" in the Author URL (slug);
* Fixed a PHP warning in the calendar page related a non defined object;
* Fixed a hardcoded table prefix and name in a query to get author by user id;
* Fixed author'slug (author url) forcing it to be equals to the user's nicename, if mapped to a user - on saving and on install/upgrade;
* Fixed the author_name param in the author link on the list of posts in the admin;
* Fixed query of posts by author (front-end and back-end) - now it displays the correct posts related to the selected author;
* Fixed conflict with CoAuthors Plus, if both plugins where activated. Related to a PHP Error about not being able to redefine an existent function;
* Fixed the migration of data when installing and upgrading, now recognizing the correct version in the conditional;
* Fixed the list of authors in the search box on posts to display only authors, removing users;
* Fixed the migration of post authors to multiple authors terms;
* Fixed query making sure to sanitize the user_id retrieved from the URL;

*Changed:*

* Removed column "Count" from authors and users list;
* Increased PublishPress minimum version required to 1.13.0;

= [2.0.1] - 14 May 2018 =

*Fixed:*

* Fixed the URL in the author link for guest authors;
* Fixed the height of the avatars in some themes;
* Fixed PHP warning when creating a new user;
* Fixed PHP warning when opening a BuddyPress member page;
* Fixed typo in the Email field description;
* Fixed PHP warning when adding a widget before saving the plugins' settings after the update;
* Fixed outdated .POT file;
* Fixed PT-BR translation file;

*Changed:*

* Author URL is now auto-populated after selecting a mapped user, and the field is disabled;
* Removed Quick Edit for authors;
* Minor improvement on styling for some form fields;
* Updated language files;
* Allow to create multiple authors mapped to the same user;
* Removed outdated and wrong translations;

*Added:*

* Added Mapped User field to the quick add form for Authors;
* Added description to some fields and improved text to make their functioning clear;
* Added support for the shortcodes in notifications which are related to authors, to display data from the multiple authors;

= [2.0.0] - 09 May 2018 =

*Added:*

* Added option to create guest authors;
* Added submenu for Authors;
* Added support for migrating from Bylines;
* Added setting to change the style of the author box, with 3 layouts available (including in the widget);
* Added more CSS classes to the elements in the author box to allow a more customized result;
* Added option to display the email and website link for the author;
* Added option to automatically convert new users of specific roles into authors;
* Added button to edit the user on authors mapped to users;

*Fixed:*

* Fixed support for custom post types;
* Fixed PHP warnings about undefined properties;
* Fixed compatibility with themes which support only co-authors;
* Fixed JS error in the post form when Avatars are disabled in the Discussions settings;
* Fixed author page to display the correct posts for the author;
* Fixed the post page to display the multiple authors when using the get_the_author() method;
* Fixed the posts counter in the authors page on the admin;
* Fixed the posts counter in the users pages on the admin;
* Fixed authors' avatars in the admin and frontend. Now it supports custom avatars defined by 3rd party plugins;
* Fixed a PHP warning when the user doesn't have permissions to set the author;

*Changed:*

* Fixed code style for files;
* Reorganized files structure in the repository;
* Changed requirement for PublishPress 1.12.0;
* Removed module descriptions from some screens, to be more consistent and clearer;
* Renamed author's slug fields and columns to "Author URL";
* Deprecated the method multiple_authors_wp_list_authors. Please, use get_the_authors();

= [1.0.6] - 07 Feb 2018 =

*Fixed:*

* Fixed license key validation and automatic updates;

*Changed:*

* Removed Quick Edit for authors;

*Changed:*

* Rebranded to PublishPress;

= [1.0.5] - 16 Out 2017 =

* Added:
* Added field to change the title of the author box appended to the content;

= [1.0.4] - 11 Out 2017 =

* Fixed:
* Fixed the filter which checks if the post type is selected to enable the module;

* Added:
* Added field to customize the widget title;

= [1.0.3] - 31 Aug 2017 =

* Changed:
* Implemented compatilbility with new Notification Workflows on PublishPress;
* Changed design for multiple authors box in dashboard;
* Removed Freemius integration;

* Fixed:
* Fixed conflict in the name of a method checking if PublishPress is active;

= [1.0.2] - 28 Jul 2017 =

* Fixed:
* Fixed the widget syntax and title;
* Fixed style of the list of authors, removing padding-left;

= [1.0.1] - 28 Jul 2017 =

* Fixed:
* Fixed license validation;

= [1.0.0] - 27 Jul 2017 =

* Changed:
* Refactored CoAuthor Plus to match the new vendor and plugin name;

* Added:
* Added new widget to display the author box;
* Added an option to display the author box automatically appended to the content. Eenabled by default, but can be disabled;
* Added a shortcode [author_box] to display the author box anywhere in the content;
* Added an action to display the author box programatically: pp_multiple_authors_show_author_box;
* Added a filter to customize the content of the author box: pp_multiple_authors_filter_author_box_markup;
* Added a filter to customize when the author box will be displayed: pp_multiple_authors_filter_should_display_author_box

* Fixed:
* Fixed the avatar in the metabox to match the WP configuration;
