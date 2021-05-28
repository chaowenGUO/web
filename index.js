globalThis.document.querySelector('#first').outerHTML = `<a href='index.html' style='background-position-x:-10px; background-position-y:-51px; width:97px; height:30px; background-image:url(nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png)'></a>`

globalThis.document.body.insertAdjacentHTML('beforeend', `
<aside style='height: 100%; width: 0; position: fixed; z-index: 1; top: 0; left: 0; background-color:white; overflow-x: hidden; transition: 0.5s'>
    <div style='position:fixed; left:22%; top:15%' onclick='globalThis.document.querySelector("aside").style.width="0"'>&times;</div>
  <div id="hmenu-canvas" class="nav-ignore-pinning hmenu-translateX">
    
<a id="hmenu-close-menu" class="hmenu-hidden-link" href="javascript:void(0)">
  <div>Close menu</div>
</a>
<a id="hmenu-customer-profile-link" onclick="$Nav.getNow('signInRedirect')('nav_em_hd_re_signin', 'https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%2F%3Fie%3DUTF8%26ref_%3Dnav_em_hd_re_signin&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=usflex&amp;openid.mode=checkid_setup&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;&amp;ref_=nav_em_hd_clc_signin', 'nav_em_hd_clc_signin')" data-nav-ref="nav_em_hd_re_signin">
<div id="hmenu-customer-profile">
    <div id="hmenu-customer-profile-left" class="hmenu-avatar-icon">
      <div id="hmenu-customer-avatar-icon" class="nav-sprite"></div>
    </div>
  <div id="hmenu-customer-profile-right">
    <div id="hmenu-customer-name">
      <b>Hello, Sign in</b>
    </div>
large  </div>
</div>
</a>
    <div id="hmenu-content">
      
<ul class="hmenu dsk-hmenu-reorganization hmenu-visible" data-menu-id="1">
<li><div class="hmenu-item hmenu-title ">trending</div></li>
<li><a href='bestsellers.html' class="hmenu-item">Best Sellers</a></li>
<li><a href='new-releases.html' class="hmenu-item">New Releases</a></li>
<li><a href="/gp/movers-and-shakers/?ref_=nav_em_ms_0_1_1_4" class="hmenu-item">Movers &amp; Shakers</a></li>
<hr>
<div style='display:grid; padding-right:20px; padding-left:36px'>
    <strong style='padding-top:13px; padding-bottom:5px; font-size:large; line-height:24px; text-transform:capitalize'>digital content &amp; devices</strong>
    <div style='display:flex; justify-content:space-between; padding-top:13px; padding-bottom:13px; font-size:14px; line-height:16px'><div>Prime Video</div> <div>&gt;</div></div>
    <div style='display:flex; justify-content:space-between; padding-top:13px; padding-bottom:13px; font-size:14px; line-height:16px'><div>Amazon Music</div> <div>&gt;</div></div>
    <div style='display:flex; justify-content:space-between; padding-top:13px; padding-bottom:13px; font-size:14px; line-height:16px'><div>Echo &amp; Alexa</div> <div>&gt;</div></div>
    <div style='display:flex; justify-content:space-between; padding-top:13px; padding-bottom:13px; font-size:14px; line-height:16px'><div>Fire Tablets</div> <div>&gt;</div></div>
    <div style='display:flex; justify-content:space-between; padding-top:13px; padding-bottom:13px; font-size:14px; line-height:16px'><div>Fire TV</div> <div>&gt;</div></div>
    <div style='display:flex; justify-content:space-between; padding-top:13px; padding-bottom:13px; font-size:14px; line-height:16px'><div>Kindle E-readers &amp; Books</div> <div>&gt;</div></div>
    <div style='display:flex; justify-content:space-between; padding-top:13px; padding-bottom:13px; font-size:14px; line-height:16px'><div>Audible Books &amp; Originals</div> <div>&gt;</div></div>
    <div style='display:flex; justify-content:space-between; padding-top:13px; padding-bottom:13px; font-size:14px; line-height:16px'><div>Appstore for Android</div> <div>&gt;</div></div>
</div>
<hr>
<li><div class="hmenu-item hmenu-title ">shop by department</div></li>
<li><a href="" class="hmenu-item" data-menu-id="10" data-ref-tag="nav_em_1_1_1_15"><div>Clothing, Shoes, Jewelry &amp; Watches</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="11" data-ref-tag="nav_em_1_1_1_16"><div>Amazon Fresh</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="12" data-ref-tag="nav_em_1_1_1_17"><div>Books</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="13" data-ref-tag="nav_em_1_1_1_18"><div>Movies, Music &amp; Games</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<ul class="hmenu-compress-section compressed"><li class="hmenu-mini-divider"></li>
<li><a href="" class="hmenu-item" data-menu-id="14" data-ref-tag="nav_em_1_1_1_19"><div>Electronics</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="15" data-ref-tag="nav_em_1_1_1_20"><div>Computers</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="16" data-ref-tag="nav_em_1_1_1_21"><div>Smart Home</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="17" data-ref-tag="nav_em_1_1_1_22"><div>Home, Garden &amp; Tools</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="18" data-ref-tag="nav_em_1_1_1_23"><div>Pet Supplies</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="19" data-ref-tag="nav_em_1_1_1_24"><div>Food &amp; Grocery</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="20" data-ref-tag="nav_em_1_1_1_25"><div>Beauty &amp; Health</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="21" data-ref-tag="nav_em_1_1_1_26"><div>Toys, Kids &amp; Baby</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="22" data-ref-tag="nav_em_1_1_1_27"><div>Handmade</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="23" data-ref-tag="nav_em_1_1_1_28"><div>Sports</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="24" data-ref-tag="nav_em_1_1_1_29"><div>Outdoors</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="25" data-ref-tag="nav_em_1_1_1_30"><div>Automotive &amp; Industrial</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
</ul>
<li><a class="hmenu-item hmenu-compressed-btn"><div>see all</div><i class="nav-sprite hmenu-arrow-more"></i></a><a class="hmenu-item hmenu-expanded-btn"><div>see less</div><i class="nav-sprite hmenu-arrow-less"></i></a></li>
<hr>
<li><div class="hmenu-item hmenu-title ">programs &amp; features</div></li>
<li><a href="" class="hmenu-item" data-menu-id="26" data-ref-tag="nav_em_1_1_1_32"><div>Whole Foods Market</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="https://pharmacy.amazon.com/?ref_=nav_em_pharmacy_0_1_1_33" class="hmenu-item">Amazon Pharmacy</a></li>
<li><a href="" class="hmenu-item" data-menu-id="27" data-ref-tag="nav_em_1_1_1_34"><div>Amazon Physical Stores</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="/gp/browse.html?node=5856181011&amp;ref_=nav_em_sns_hamburger_0_1_1_35" class="hmenu-item">Subscribe &amp; Save</a></li><ul class="hmenu-compress-section compressed"><li class="hmenu-mini-divider"></li>
<li><a href="" class="hmenu-item" data-menu-id="28" data-ref-tag="nav_em_1_1_1_36"><div>Make Money with Amazon</div><i class="nav-sprite hmenu-arrow-next"></i></a></li><li><a href="" class="hmenu-item" data-menu-id="29" data-ref-tag="nav_em_1_1_1_37"><div>Home Services</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="30" data-ref-tag="nav_em_1_1_1_38"><div>Gift Cards</div><i class="nav-sprite hmenu-arrow-next"></i></a></li><li><a href="" class="hmenu-item" data-menu-id="31" data-ref-tag="nav_em_1_1_1_39"><div>Credit &amp; Payment Products</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="/finds?ref_=nav_em_allpf_foundit_d_0_1_1_40" class="hmenu-item">#FoundItOnAmazon</a></li><li><a href="" class="hmenu-item" data-menu-id="32" data-ref-tag="nav_em_1_1_1_41"><div>Amazon Launchpad</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="33" data-ref-tag="nav_em_1_1_1_42"><div>Amazon Subscription Boxes</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="34" data-ref-tag="nav_em_1_1_1_43"><div>Amazon Live</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="35" data-ref-tag="nav_em_1_1_1_44"><div>Treasure Truck</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="36" data-ref-tag="nav_em_1_1_1_45"><div>International Shopping</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="37" data-ref-tag="nav_em_1_1_1_46"><div>Amazon Photos and Prints</div><i class="nav-sprite hmenu-arrow-next"></i></a></li>
<li><a href="" class="hmenu-item" data-menu-id="38" data-ref-tag="nav_em_1_1_1_47"><div>Small &amp; Medium Businesses</div><i class="nav-sprite hmenu-arrow-next"></i></a></li><li><a href="/amsc?ref_=nav_em__amsc_hamburger_0_1_1_48" class="hmenu-item">Amazon Second Chance</a></li>
<li><a href="/gp/browse.html?node=19419898011&amp;ref_=nav_em_ae_nav_hmbrgr_dsktp_0_1_1_49" class="hmenu-item">Amazon Explore </a></li></ul><li><a class="hmenu-item hmenu-compressed-btn"><div>see all</div><i class="nav-sprite hmenu-arrow-more"></i></a><a class="hmenu-item hmenu-expanded-btn"><div>see less</div><i class="nav-sprite hmenu-arrow-less"></i></a></li>
<li><a href="/gp/site-directory?ref_=nav_em__fullstore_0_1_1_50" class="hmenu-item">Full Store Directory</a></li>
<hr>
<li><div class="hmenu-item hmenu-title ">help &amp; settings</div></li><a onclick="$Nav.getNow('
<li><a href="/gp/css/homepage.html?ref_=nav_em_ya_0_1_1_52" class="hmenu-item">Your Account</a></li>
<li><a id="hmenu-icp-language" href="/gp/customer-preferences/select-language/?preferencesReturnUrl=%2F&amp;ref_=nav_em_mozart_0_1_1_53" class="hmenu-item"><div class="hmenu-icon-container"><i class="icon-css-reset icp-nav-globe-img-2 icp-mobile-globe-2"></i></div>English</a></li>
<li><a href="/gp/navigation-country/select-country/?ref_=nav_em_locale_0_1_1_54" class="hmenu-item"><div class="hmenu-icon-container"><i class="icon-css-reset icp-flag-3 icp-flag-3-us"></i></div>United States</a></li>
<li><a href="/gp/help/customer/display.html?nodeId=508510&amp;ref_=nav_em_cs_help_0_1_1_55" class="hmenu-item">Help</a></li>
<li><a onclick="$Nav.getNow('signInRedirect')('nav_em_hd_re_signin', 'https://www.amazon.com/ap/signin?openid.assoc_handle=usflex&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.mode=checkid_setup&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%2F%3Fie%3DUTF8%26ref_%3Dnavm_em_hd_re_signin&amp;ref_=nav_em_hd_clc_signin_0_1_1_56', 'nav_em_hd_clc_signin_0_1_1_56')" class="hmenu-item">Sign In</a></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="2" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_2_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">prime video</div></li><li><a href="/Amazon-Video/s/browse?node=2858778011&amp;ref_=nav_em__aiv_0_2_2_2" class="hmenu-item">Prime Video</a></li><li><a href="/s/browse?filterId=OFFER_FILTER%3DPRIME&amp;node=2858778011&amp;ref_=nav_em__aiv_piv_0_2_2_3" class="hmenu-item">Included with Prime</a></li><li><a href="/s/browse?filterId=OFFER_FILTER%3DSUBSCRIPTIONS&amp;node=2858778011&amp;ref_=nav_em__nav_sa_aos_0_2_2_4" class="hmenu-item">Prime Video Channels</a></li><li><a href="/s/browse?filterId=OFFER_FILTER%3DTVOD&amp;node=2858778011&amp;ref_=nav_em__aiv_shop_0_2_2_5" class="hmenu-item">Rent or Buy</a></li><li><a href="/gp/video/watchlist/?ref_=nav_em__aiv_wlst_0_2_2_6" class="hmenu-item">Your Watchlist</a></li><li><a href="/gp/video/library?ref_=nav_em__aiv_yvl_0_2_2_7" class="hmenu-item">Purchases &amp; Rentals</a></li><li><a href="/gp/feature.html?docId=1001423601&amp;ref_=nav_em__aiv_wtv_0_2_2_8" class="hmenu-item">Watch Anywhere</a></li><li><a href="/gp/video/getstarted?ref_=nav_em__aiv_gs_0_2_2_9" class="hmenu-item">Getting Started</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">more to explore</div></li><li><a href="/s/browse?merchId=originals1&amp;node=2858778011&amp;ref_=nav_em__nav_sa_org_0_2_2_11" class="hmenu-item">Amazon Originals</a></li><li><a href="/s/browse?merchId=primevideokids&amp;node=2858778011&amp;ref_=nav_em__nav_sa_org_0_2_2_12" class="hmenu-item">Kids</a></li>
  <li><a href="/gp/video/storefront?contentId=comingtoprime&amp;contentType=merch&amp;ref_=nav_em_0_2_2_13" class="hmenu-item">Coming soon</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="3" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_3_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">stream music</div></li><li><a href="/gp/dmusic/promotions/AmazonMusicUnlimited?ref_=nav_em__dm_hf_0_2_3_2" class="hmenu-item">Amazon Music Unlimited</a></li><li><a href="/music/unlimited/hd?ref_=nav_em__dm_hf_hd_0_2_3_3" class="hmenu-item">Amazon Music HD</a></li><li><a href="/gp/dmusic/promotions/PrimeMusic?ref_=nav_em__dm_pm_0_2_3_4" class="hmenu-item">Prime Music</a></li><li><a href="/music/free?ref_=nav_em__dm_nav_nw_0_2_3_5" class="hmenu-item">Free Streaming Music</a></li><li><a href="/gp/dmusic/mp3/player?ref_=nav_em_dm_webplayer_0_2_3_6" class="hmenu-item">Open Web Player</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">buy music</div></li><li><a href="/gp/browse.html?node=5174&amp;ref_=nav_em__dm_cds_vinyl_0_2_3_8" class="hmenu-item">CDs &amp; Vinyl</a></li><li><a href="/gp/browse.html?node=163856011&amp;ref_=nav_em__dm_store_hf_0_2_3_9" class="hmenu-item">Download Store</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="4" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_4_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">echo &amp; alexa</div></li><li><a href="/dp/B07HZLHPKP?ref_=nav_em__ods_ha_echo_ch_0_2_4_2" class="hmenu-item">Echo Show 5</a></li><li><a href="/dp/B07PF1Y28C?ref_=nav_em__ods_ha_echo_cw_0_2_4_3" class="hmenu-item">Echo Show 8</a></li><li><a href="/dp/B077SXWSRP?ref_=nav_em__ods_ha_echo_bs_0_2_4_4" class="hmenu-item">Echo Show</a></li><li><a href="/dp/B07VHZ41L8?ref_=nav_em__k_ods_ha_ta_0_2_4_5" class="hmenu-item">All-new Echo Show 10</a></li><li><a href="/dp/B07MLY3JKV?ref_=nav_em__ods_ha_echo_ct_0_2_4_6" class="hmenu-item">Echo Flex</a></li><li><a href="/dp/B07XJ8C8F5?ref_=nav_em__ods_ha_echo_dt_0_2_4_7" class="hmenu-item">Echo Dot</a></li><li><a href="/dp/B07XKF5RM3?ref_=nav_em__k_ods_ha_lr_0_2_4_8" class="hmenu-item">Echo</a></li><li><a href="/dp/B07G9Y3ZMC?ref_=nav_em__ods_ha_echo_ov_0_2_4_9" class="hmenu-item">Echo Studio</a></li><li><a href="/dp/B07V2PS7M6?ref_=nav_em__ods_ha_echo_mf_0_2_4_10" class="hmenu-item">Echo Auto</a></li><li><a href="/dp/B07F6VM1S3?ref_=nav_em__ods_ha_echo_pg_0_2_4_11" class="hmenu-item">Echo Buds</a></li><li><a href="/dp/B07JPK4XJ6?ref_=nav_em__ods_ha_echo_hk_0_2_4_12" class="hmenu-item">Echo Loop</a></li><li><a href="/dp/B083C58VDP?ref_=nav_em__ods_ha_echo_zr_0_2_4_13" class="hmenu-item">Echo Frames</a></li><li><a href="/gp/browse.html?node=9818047011&amp;ref_=nav_em__ods_ha_echo_cp_0_2_4_14" class="hmenu-item">See all devices with Alexa</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">alexa smart home</div></li><li><a href="/dp/B01MZEEFNX?ref_=nav_em__ods_ha_aucc_sl_0_2_4_16" class="hmenu-item">Amazon Smart Plug</a></li><li><a href="/dp/B07894S727?ref_=nav_em__ods_ha_aucc_sp_0_2_4_17" class="hmenu-item">AmazonBasics Microwave</a></li><li><a href="/dp/B07PB21SRV?ref_=nav_em__k_ods_mw_vicc_bl_0_2_4_18" class="hmenu-item">Amazon Smart Oven </a></li><li><a href="/dp/B07KRY43KN?ref_=nav_em__ods_ha_vicc_sk_0_2_4_19" class="hmenu-item">Echo Glow</a></li><li><a href="/gp/browse.html?node=6563140011&amp;ref_=nav_em__ods_ha_echo_ch_0_2_4_20" class="hmenu-item">See all smart home devices</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">content &amp; resources</div></li><li><a href="/gp/browse.html?node=17934671011&amp;ref_=nav_em__ods_ha_alexa_ug_0_2_4_22" class="hmenu-item">Meet Alexa</a></li><li><a href="/gp/browse.html?node=19149155011&amp;ref_=nav_em__ods_ha_alexa_ph_0_2_4_23" class="hmenu-item">Alexa Privacy</a></li><li><a href="/gp/help/customer/display.html?nodeId=201602060&amp;ref_=nav_em__ods_ha_con_help_0_2_4_24" class="hmenu-item">Alexa App</a></li><li><a href="/gp/browse.html?node=13727921011&amp;ref_=nav_em__ods_ha_con_skills_st_0_2_4_25" class="hmenu-item">Alexa Skills</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="5" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_5_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">fire tablets</div></li><li><a href="/dp/B07FKR6KXF?ref_=nav_em__k_ods_tab_mg_0_2_5_2" class="hmenu-item">Fire 7
</a></li><li><a href="/dp/B07K1RZWMC?ref_=nav_em__k_ods_tab_mk_0_2_5_3" class="hmenu-item">Fire HD 10</a></li><li><a href="/dp/B07H8WS1FT?ref_=nav_em__k_ods_tab_mkt_0_2_5_4" class="hmenu-item">Fire 7 Kids Edition</a></li><li><a href="/dp/B07KD7K4B1?ref_=nav_em__k_ods_tab_mkt_0_2_5_5" class="hmenu-item">Fire HD 10 Kids Edition</a></li><li><a href="/gp/browse.html?node=370783011&amp;ref_=nav_em__ods_tab_acc_0_2_5_6" class="hmenu-item">Accessories</a></li><li><a href="/gp/browse.html?node=6669703011&amp;ref_=nav_em__ods_tab_catp_0_2_5_7" class="hmenu-item">See all Fire tablets</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">content &amp; resources</div></li><li><a href="/Instant-Video/s/browse?node=2858778011&amp;ref_=nav_em__ods_tab_con_aiv_0_2_5_9" class="hmenu-item">Prime Video</a></li><li><a href="/gp/browse.html?node=3427287011&amp;ref_=nav_em__ods_tab_con_apps_0_2_5_10" class="hmenu-item">Apps &amp; Games</a></li><li><a href="/gp/browse.html?node=163856011&amp;ref_=nav_em__ods_tab_con_music_0_2_5_11" class="hmenu-item">Digital Music</a></li><li><a href="/gp/browse.html?node=154606011&amp;ref_=nav_em__ods_tab_con_books_0_2_5_12" class="hmenu-item">Kindle Books</a></li><li><a href="/gp/kindle/ku/sign-up/ui/rw/about?ref_=nav_em__ods_tab_con_ku_0_2_5_13" class="hmenu-item">Kindle Unlimited</a></li><li><a href="/dp/B01I499BNA?ref_=nav_em__ods_tab_gno_ftu_0_2_5_14" class="hmenu-item">Amazon FreeTime Unlimited</a></li><li><a href="/gp/digital/fiona/redirect/newsstand/home/?ref_=nav_em__ods_tab_con_news_0_2_5_15" class="hmenu-item">Newsstand</a></li><li><a href="/gp/digital/fiona/manage?ref_=nav_em__ods_tab_con_myf_0_2_5_16" class="hmenu-item">Manage Your Content and Devices</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="6" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_6_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">watch and play</div></li><li><a href="/dp/B07YNLBS7R?ref_=nav_em__ods_smp_sld_nav_0_2_6_2" class="hmenu-item">Fire TV Stick Lite</a></li><li><a href="/dp/B07ZZVX1F2?ref_=nav_em__ods_smp_sld_nav_0_2_6_3" class="hmenu-item">All-new Fire TV Stick</a></li><li><a href="/dp/B079QHML21?ref_=nav_em__ods_smp_mt_nav_0_2_6_4" class="hmenu-item">Fire TV Stick 4K</a></li><li><a href="/dp/B07KGVB6D6?ref_=nav_em__ods_smp_rn_nav_0_2_6_5" class="hmenu-item">Fire TV Cube</a></li><li><a href="/dp/B01J6A6H74?ref_=nav_em__k_ods_smp_fk_0_2_6_6" class="hmenu-item">Fire TV Recast</a></li><li><a href="/gp/browse.html?node=8521791011&amp;ref_=nav_em__ods_smp_catp_0_2_6_7" class="hmenu-item">See Fire TV Family</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">movies, tv, and games</div></li><li><a href="/Prime-Instant-Video/s/browse?node=2676882011&amp;ref_=nav_em__ods_tv_con_piv_0_2_6_9" class="hmenu-item">Prime Video - Included with Prime</a></li><li><a href="/gp/browse.html?node=10208590011&amp;ref_=nav_em__ods_tv_apps_chan_0_2_6_10" class="hmenu-item">Fire TV Apps &amp; Channels</a></li><li><a href="/gp/browse.html?node=7031433011&amp;ref_=nav_em__ods_tv_con_gaming_0_2_6_11" class="hmenu-item">Games for Fire TV</a></li><li><a href="/clouddrive/home/?ref_=nav_em__ods_tv_con_cd_0_2_6_12" class="hmenu-item">Amazon Photos</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="7" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_7_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">kindle e-readers</div></li><li><a href="/dp/B07NQKJVKR?ref_=nav_em__k_ods_eink_kke_0_2_7_2" class="hmenu-item">Kindle Kids Edition</a></li><li><a href="/dp/B07978J597?ref_=nav_em__k_ods_eink_jr_0_2_7_3" class="hmenu-item">Kindle</a></li><li><a href="/dp/B07CXG6C9W?ref_=nav_em__k_ods_eink_sd_me_0_2_7_4" class="hmenu-item">Kindle Paperwhite</a></li><li><a href="/dp/B07F7TLZF4?ref_=nav_em__k_ods_eink_wy_0_2_7_5" class="hmenu-item">Kindle Oasis</a></li><li><a href="/gp/browse.html?node=370783011&amp;ref_=nav_em__ods_eink_acc_0_2_7_6" class="hmenu-item">Accessories</a></li><li><a href="/gp/browse.html?node=6669702011&amp;ref_=nav_em__ods_eink_catp_0_2_7_7" class="hmenu-item">See all Kindle E-Readers</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">kindle store</div></li><li><a href="/gp/browse.html?node=1286228011&amp;ref_=nav_em__ods_eink_con_books_0_2_7_9" class="hmenu-item">Kindle Books</a></li><li><a href="/gp/kindle/ku/sign-up/ui/rw/about?ref_=nav_em__ods_eink_con_ku_0_2_7_10" class="hmenu-item">Kindle Unlimited</a></li><li><a href="/kindle-dbs/fd/prime-pr?ref_=nav_em__ods_eink_con_pr_0_2_7_11" class="hmenu-item">Prime Reading</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">apps &amp; resources</div></li><li><a href="/gp/feature.html?docId=1000493771&amp;ref_=nav_em__ods_eink_con_karl_0_2_7_13" class="hmenu-item">Free Kindle Reading Apps</a></li><li><a href="/gp/redirect.html?location=https%3A%2F%2Fread.amazon.com%2F%3Fref_%3D_ods_eink_con_kcr&amp;source=nav_linktree&amp;token=E06FDC8F99EDA4A0C6694501505B43F118EA295B&amp;ref_=nav_em_0_2_7_14" class="hmenu-item">Kindle Cloud Reader</a></li><li><a href="/gp/digital/fiona/manage?ref_=nav_em__ods_eink_con_myk_0_2_7_15" class="hmenu-item">Manage Your Content and Devices</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="8" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_8_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">audible books &amp; originals</div></li><li><a href="/dp/B00NB86OYE?ref_=nav_em_aud_mem_dct1_0_2_8_2" class="hmenu-item">Audible Membership</a></li><li><a href="/gp/browse.html?node=18145289011&amp;ref_=nav_em_aud_bks_dct1_0_2_8_3" class="hmenu-item">Audible Books &amp; Originals</a></li><li><a href="/Best-Sellers-Audible-Audiobooks/zgbs/audible?ref_=nav_em_aud_zgbs_dct1_0_2_8_4" class="hmenu-item">Best Sellers</a></li><li><a href="/gp/new-releases/audible?ref_=nav_em_aud_zgnr_dct1_0_2_8_5" class="hmenu-item">New Releases</a></li><li><a href="/gp/movers-and-shakers/audible?ref_=nav_em_aud_zgms_dct1_0_2_8_6" class="hmenu-item">Trending Titles</a></li><li><a href="/gp/browse.html?node=21209891011&amp;ref_=nav_em_aud_award_dct1_0_2_8_7" class="hmenu-item">Award Winners</a></li><li><a href="/gp/browse.html?node=18294742011&amp;ref_=nav_em_aud_lat_dct1_0_2_8_8" class="hmenu-item">Audible Latino</a></li><li><a href="/hz/audible/gift-membership-detail?ref_=nav_em_aud_gm_dct1_0_2_8_9" class="hmenu-item">Gift Memberships</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="9" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_9_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">appstore for android</div></li><li><a href="/gp/browse.html?node=2350149011&amp;ref_=nav_em__adr_app_0_2_9_2" class="hmenu-item">All Apps and Games </a></li><li><a href="/gp/browse.html?node=9209902011&amp;ref_=nav_em__adr_gam_0_2_9_3" class="hmenu-item">Games</a></li><li><a href="/coins?ref_=nav_em__adr_coins_0_2_9_4" class="hmenu-item">Amazon Coins</a></li><li><a href="/gp/feature.html?docId=1003016361&amp;ref_=nav_em__adr_dl_0_2_9_5" class="hmenu-item">Download Amazon Appstore</a></li><li><a href="/gp/feature.html?docId=1000645111&amp;ref_=nav_em__adr_amz_0_2_9_6" class="hmenu-item">Amazon Apps</a></li><li><a href="/gp/mas/your-account/myapps?ref_=nav_em__adr_yad_0_2_9_7" class="hmenu-item">Your Apps and Subscriptions</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="10" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_10_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">clothing, shoes, jewelry &amp; watches</div></li><li><a href="/gp/browse.html?node=7141123011&amp;ref_=nav_em__sft_0_2_10_2" class="hmenu-item">Amazon Fashion</a></li><li><a href="/gp/browse.html?node=7147440011&amp;ref_=nav_em__sft_women_0_2_10_3" class="hmenu-item">Women</a></li><li><a href="/gp/browse.html?node=7147441011&amp;ref_=nav_em__sft_men_0_2_10_4" class="hmenu-item">Men</a></li><li><a href="/gp/browse.html?node=7147442011&amp;ref_=nav_em__sft_girls_0_2_10_5" class="hmenu-item">Girls</a></li><li><a href="/gp/browse.html?node=7147443011&amp;ref_=nav_em__sft_boys_0_2_10_6" class="hmenu-item">Boys</a></li><li><a href="/gp/browse.html?node=7147444011&amp;ref_=nav_em__sft_baby_0_2_10_7" class="hmenu-item">Baby</a></li><li><a href="/gp/browse.html?node=9479199011&amp;ref_=nav_em__sft_luggage_0_2_10_8" class="hmenu-item">Luggage</a></li><li><a href="https://www.amazon.com/thedrop?ref_=nav_em_0_2_10_9" class="hmenu-item">The Drop</a></li><li><a href="/gp/browse.html?node=14807110011&amp;ref_=nav_em_tbyb_site_directory_tbyb_l0_0_2_10_10" class="hmenu-item">Prime Wardrobe</a></li><li><a href="/gp/browse.html?node=9538491011&amp;ref_=nav_em__sft_sales_0_2_10_11" class="hmenu-item">Sales &amp; Deals</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">more to explore</div></li><li><a href="/gp/browse.html?node=16334314011&amp;ref_=nav_em__OurBrands_0_2_10_13" class="hmenu-item">Our Brands</a></li><li><a href="/stores/page/135F2992-CF34-468F-B67F-101F73A197E3?ref_=nav_em__shopbop_0_2_10_14" class="hmenu-item">The Shop by Shopbop</a></li><li><a href="/gp/browse.html?node=21213464011&amp;ref_=nav_em__ammerch_fash_0_2_10_15" class="hmenu-item">Artist Merch Shop</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="11" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_11_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">amazon fresh</div></li><li><a href="/alm/storefront?almBrandId=QW1hem9uIEZyZXNo&amp;ref_=nav_em__afs_aaf_0_2_11_2" class="hmenu-item">All Amazon Fresh</a></li><li><a href="/b?bbn=10329849011&amp;node=16310231&amp;ref_=nav_em__afs_bev_0_2_11_3" class="hmenu-item">Beverages</a></li><li><a href="/b?bbn=10329849011&amp;node=16318751&amp;ref_=nav_em__afs_bb_0_2_11_4" class="hmenu-item">Breads &amp; Bakery</a></li><li><a href="/b?bbn=10329849011&amp;node=371460011&amp;ref_=nav_em__afs_dce_0_2_11_5" class="hmenu-item">Dairy, Cheese &amp; Eggs</a></li><li><a href="/b?bbn=10329849011&amp;node=6459122011&amp;ref_=nav_em__afs_ff_0_2_11_6" class="hmenu-item">Frozen Foods</a></li><li><a href="/b?bbn=10329849011&amp;node=16318981&amp;ref_=nav_em__afs_fr_0_2_11_7" class="hmenu-item">Fruits</a></li><li><a href="/b?bbn=10329849011&amp;node=371469011&amp;ref_=nav_em__afs_ms_0_2_11_8" class="hmenu-item">Meat &amp; Seafood</a></li><li><a href="/alm/category?almBrandId=QW1hem9uIEZyZXNo&amp;node=18773724011&amp;ref_=nav_em__afs_pm_0_2_11_9" class="hmenu-item">Prepared Meals</a></li><li><a href="/b?bbn=10329849011&amp;node=16322721&amp;ref_=nav_em__afs_sf_0_2_11_10" class="hmenu-item">Snack Foods</a></li><li><a href="/b?bbn=10329849011&amp;node=16319281&amp;ref_=nav_em__afs_vg_0_2_11_11" class="hmenu-item">Vegetables</a></li><li><a href="/alm/category?almBrandId=QW1hem9uIEZyZXNo&amp;node=3760901&amp;ref_=nav_em__afs_hpc_0_2_11_12" class="hmenu-item">Household, Health &amp; Beauty</a></li><li><a href="/b?bbn=10329849011&amp;node=15342811&amp;ref_=nav_em__afs_hc_0_2_11_13" class="hmenu-item">Household &amp; Cleaning</a></li><li><a href="/afx/lists/pastpurchases?ref_=nav_em__afs_pp_0_2_11_14" class="hmenu-item">Past Purchases</a></li><li><a href="/l/?bbn=10329849011&amp;node=13904808011&amp;ref_=nav_em__afs_fd_0_2_11_15" class="hmenu-item">Fresh Deals</a></li><li><a href="/afx/lists/grocerylists?ref_=nav_em__afs_gl_0_2_11_16" class="hmenu-item">Grocery Lists</a></li><li><a href="/b?bbn=10329849011&amp;node=14762495011&amp;ref_=nav_em__afs_nhs_0_2_11_17" class="hmenu-item">Local Market</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="12" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_12_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">books</div></li><li><a href="/gp/browse.html?node=283155&amp;ref_=nav_em__bo_t3_0_2_12_2" class="hmenu-item">Books</a></li><li><a href="/gp/browse.html?node=4&amp;ref_=nav_em__cbo_t3_0_2_12_3" class="hmenu-item">Children's Books</a></li><li><a href="/gp/browse.html?node=465600&amp;ref_=nav_em__tb_t3_0_2_12_4" class="hmenu-item">Textbooks</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">audible books &amp; originals</div></li><li><a href="/dp/B00NB86OYE?ref_=nav_em_aud_mem_t3_0_2_12_6" class="hmenu-item">Audible Membership</a></li><li><a href="/gp/browse.html?node=18145289011&amp;ref_=nav_em_aud_bks_t3_0_2_12_7" class="hmenu-item">Audible Books &amp; Originals</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">kindle books</div></li><li><a href="/gp/browse.html?node=1286228011&amp;ref_=nav_em__k_kbo_t3_0_2_12_9" class="hmenu-item">Kindle Books</a></li><li><a href="/gp/kindle/ku/sign-up/ui/rw/about?ref_=nav_em__ods_books_con_ku_t3_0_2_12_10" class="hmenu-item">Kindle Unlimited</a></li><li><a href="/kindle-dbs/fd/prime-pr?ref_=nav_em__ods_eink_con_pr_t3_0_2_12_11" class="hmenu-item">Prime Reading</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">more to explore</div></li><li><a href="/gp/browse.html?node=156104011&amp;ref_=nav_em__comicsgraphic_0_2_12_13" class="hmenu-item">Comics &amp; Graphic Novels
</a></li><li><a href="/gp/browse.html?node=599858&amp;ref_=nav_em__magazines_t3_0_2_12_14" class="hmenu-item">Magazines</a></li><li><a href="/gp/browse.html?node=668781011&amp;ref_=nav_em__student_t3_0_2_12_15" class="hmenu-item">Prime Student</a></li><li><a href="/gp/browse.html?node=5744819011&amp;ref_=nav_em_aud_wfv_t3_0_2_12_16" class="hmenu-item">Whispersync for Voice</a></li><li><a href="/gp/browse.html?node=2056775011&amp;ref_=nav_em__abebooks_t3_0_2_12_17" class="hmenu-item">AbeBooks.com</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">digital downloads</div></li><li><a href="/gp/browse.html?node=17987895011&amp;ref_=nav_em__bks_der_0_2_12_19" class="hmenu-item">Digital Educational Resources</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="13" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_13_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">movies, music &amp; games</div></li><li><a href="/gp/browse.html?node=2625373011&amp;ref_=nav_em__mov_0_2_13_2" class="hmenu-item">Movies &amp; TV</a></li><li><a href="/gp/browse.html?node=2901953011&amp;ref_=nav_em__blu_0_2_13_3" class="hmenu-item">Blu-ray</a></li><li><a href="/gp/browse.html?node=2858778011&amp;ref_=nav_em__atv_0_2_13_4" class="hmenu-item">Prime Video - Included with Prime</a></li><li><a href="/gp/browse.html?node=9013971011&amp;ref_=nav_em__video_shorts_0_2_13_5" class="hmenu-item">Video Shorts</a></li><li><a href="/gp/browse.html?node=5174&amp;ref_=nav_em__cd_vinyl_0_2_13_6" class="hmenu-item">CDs &amp; Vinyl</a></li><li><a href="/gp/browse.html?node=163856011&amp;ref_=nav_em__dmusic_0_2_13_7" class="hmenu-item">Digital Music</a></li><li><a href="/gp/browse.html?node=11091801&amp;ref_=nav_em__mi_0_2_13_8" class="hmenu-item">Musical Instruments</a></li><li><a href="/gp/browse.html?node=172541&amp;ref_=nav_em_headphones_0_2_13_9" class="hmenu-item">Headphones</a></li><li><a href="/gp/browse.html?node=468642&amp;ref_=nav_em__cvg_0_2_13_10" class="hmenu-item">Video Games</a></li><li><a href="/gp/browse.html?node=8588809011&amp;ref_=nav_em__pcgaming41516_0_2_13_11" class="hmenu-item">PC Gaming</a></li><li><a href="/gp/browse.html?node=979455011&amp;ref_=nav_em__gdown_0_2_13_12" class="hmenu-item">Digital Games</a></li><li><a href="/gp/browse.html?node=5088769011&amp;ref_=nav_em__entcol_0_2_13_13" class="hmenu-item">Entertainment Collectibles</a></li><li><a href="/gp/browse.html?node=2242532011&amp;ref_=nav_em__trade_in_mmg_0_2_13_14" class="hmenu-item">Trade In Video Games</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="14" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_14_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">electronics</div></li><li><a href="/gp/browse.html?node=1266092011&amp;ref_=nav_em__tv_0_2_14_2" class="hmenu-item">TV &amp; Video</a></li><li><a href="/gp/browse.html?node=667846011&amp;ref_=nav_em__hat_0_2_14_3" class="hmenu-item">Home Audio &amp; Theater</a></li><li><a href="/gp/browse.html?node=502394&amp;ref_=nav_em__p_0_2_14_4" class="hmenu-item">Camera, Photo &amp; Video</a></li><li><a href="/gp/browse.html?node=2335752011&amp;ref_=nav_em__wi_0_2_14_5" class="hmenu-item">Cell Phones &amp; Accessories</a></li><li><a href="/gp/browse.html?node=172541&amp;ref_=nav_em_headphones_0_2_14_6" class="hmenu-item">Headphones</a></li><li><a href="/gp/browse.html?node=468642&amp;ref_=nav_em__cvg_ce_0_2_14_7" class="hmenu-item">Video Games</a></li><li><a href="/gp/browse.html?node=172563&amp;ref_=nav_em__bluetoothwireless_0_2_14_8" class="hmenu-item">Bluetooth &amp; Wireless Speakers</a></li><li><a href="/gp/browse.html?node=1077068&amp;ref_=nav_em__gps_ce_0_2_14_9" class="hmenu-item">Car Electronics</a></li><li><a href="/gp/browse.html?node=11091801&amp;ref_=nav_em__mi_ce_0_2_14_10" class="hmenu-item">Musical Instruments</a></li><li><a href="/gp/browse.html?node=9013937011&amp;ref_=nav_em_wear_tech_0_2_14_11" class="hmenu-item">Wearable Technology</a></li><li><a href="/gp/browse.html?node=172282&amp;ref_=nav_em__elec_hub_0_2_14_12" class="hmenu-item">Electronics</a></li><li><a href="/gp/browse.html?node=17881058011&amp;ref_=nav_em_nav_cerenewed_0_2_14_13" class="hmenu-item">Amazon Renewed</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="15" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_15_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">computers</div></li><li><a href="/gp/browse.html?node=541966&amp;ref_=nav_em__basedevices_0_2_15_2" class="hmenu-item">Computers, Tablets, &amp; PC Products</a></li><li><a href="/gp/browse.html?node=1292115011&amp;ref_=nav_em__monitors_0_2_15_3" class="hmenu-item">Monitors</a></li><li><a href="/gp/browse.html?node=172456&amp;ref_=nav_em__compaccess_0_2_15_4" class="hmenu-item">Accessories</a></li><li><a href="/gp/browse.html?node=172504&amp;ref_=nav_em__networking_0_2_15_5" class="hmenu-item"> Networking </a></li><li><a href="/gp/browse.html?node=1292110011&amp;ref_=nav_em__storage_0_2_15_6" class="hmenu-item">Drives &amp; Storage</a></li><li><a href="/gp/browse.html?node=193870011&amp;ref_=nav_em__components_0_2_15_7" class="hmenu-item">Computer Parts &amp; Components</a></li><li><a href="/gp/browse.html?node=172635&amp;ref_=nav_em__printers_0_2_15_8" class="hmenu-item">Printers &amp; Ink</a></li><li><a href="/gp/browse.html?node=229534&amp;ref_=nav_em__sw_0_2_15_9" class="hmenu-item">Software</a></li><li><a href="/gp/browse.html?node=1064954&amp;ref_=nav_em__op_0_2_15_10" class="hmenu-item">Office &amp; School Supplies</a></li><li><a href="/gp/browse.html?node=2226766011&amp;ref_=nav_em__trade_in_elec_0_2_15_11" class="hmenu-item">Trade In Your Electronics</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="16" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_16_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">smart home</div></li><li><a href="/gp/browse.html?node=6563140011&amp;ref_=nav_em_amazon_smart_home_0_2_16_2" class="hmenu-item">Amazon Smart Home</a></li><li><a href="/gp/browse.html?node=13575748011&amp;ref_=nav_em_sbdshd_lighting_0_2_16_3" class="hmenu-item">Lighting</a></li><li><a href="/gp/browse.html?node=16334612011&amp;ref_=nav_em_sbdshd_door_locks_0_2_16_4" class="hmenu-item">Door Locks</a></li><li><a href="/gp/browse.html?node=16713337011&amp;ref_=nav_em_sbdshd_cameras_0_2_16_5" class="hmenu-item">Cameras</a></li><li><a href="/gp/browse.html?node=13575750011&amp;ref_=nav_em_sbdshd_plugs_0_2_16_6" class="hmenu-item">Plugs</a></li><li><a href="/gp/browse.html?node=16334613011&amp;ref_=nav_em_sbdshd_o_s_0_2_16_7" class="hmenu-item">Other Smart Solutions</a></li><li><a href="/gp/browse.html?node=13575749011&amp;ref_=nav_em_sbdshd_thermostats_0_2_16_8" class="hmenu-item">Thermostats</a></li><li><a href="/gp/browse.html?node=18447749011&amp;ref_=nav_em_smart_security_systems_0_2_16_9" class="hmenu-item">Security Systems</a></li><li><a href="/gp/browse.html?node=16713338011&amp;ref_=nav_em_sbdshd_tv_video_0_2_16_10" class="hmenu-item">Televisions</a></li><li><a href="/gp/browse.html?node=17284462011&amp;ref_=nav_em_sbdshd_aht_0_2_16_11" class="hmenu-item">Speakers</a></li><li><a href="/gp/browse.html?node=9818047011&amp;ref_=nav_em_sbdshd_v_a_0_2_16_12" class="hmenu-item">Voice Assistants</a></li><li><a href="/gp/browse.html?node=19185102011&amp;ref_=nav_em_smart_kitchen_0_2_16_13" class="hmenu-item">Kitchen</a></li><li><a href="/gp/browse.html?node=17934444011&amp;ref_=nav_em_sbdshd_vac_0_2_16_14" class="hmenu-item">Vacuums</a></li><li><a href="/gp/browse.html?node=19185103011&amp;ref_=nav_em_smart_printer_and_pcs_0_2_16_15" class="hmenu-item">Printers and PC</a></li><li><a href="/gp/browse.html?node=18653614011&amp;ref_=nav_em_smart_network_and_wifi_0_2_16_16" class="hmenu-item">Network and Wifi</a></li><li><a href="/gp/browse.html?node=19185106011&amp;ref_=nav_em_new_to_smarthome_0_2_16_17" class="hmenu-item">New to Smart Home</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="17" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_17_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">home, garden &amp; pets</div></li><li><a href="/gp/browse.html?node=1055398&amp;ref_=nav_em_home_amazonhome_0_2_17_2" class="hmenu-item">Amazon Home</a></li><li><a href="/gp/browse.html?node=14544458011&amp;ref_=nav_em_home_shopbyroom_0_2_17_3" class="hmenu-item">Shop by Room</a></li><li><a href="/discover?ref_=nav_em_home_sbl_0_2_17_4" class="hmenu-item">Discover</a></li><li><a href="/showroom?ref_=nav_em_srm_hm_dsk_0_2_17_5" class="hmenu-item">Explore Showroom</a></li><li><a href="/gp/browse.html?node=1063278&amp;ref_=nav_em_home_homedecor_0_2_17_6" class="hmenu-item">Home Décor</a></li><li><a href="/gp/browse.html?node=1063306&amp;ref_=nav_em__furn_0_2_17_7" class="hmenu-item">Furniture</a></li><li><a href="/gp/browse.html?node=284507&amp;ref_=nav_em__ki_0_2_17_8" class="hmenu-item">Kitchen &amp; Dining</a></li><li><a href="/gp/browse.html?node=1057792&amp;ref_=nav_em__bb_0_2_17_9" class="hmenu-item">Bed &amp; Bath</a></li><li><a href="/gp/browse.html?node=2972638011&amp;ref_=nav_em__lp_0_2_17_10" class="hmenu-item">Garden &amp; Outdoor</a></li><li><a href="/gp/browse.html?node=3732961&amp;ref_=nav_em_home_mattresses_0_2_17_11" class="hmenu-item">Mattresses</a></li><li><a href="/gp/browse.html?node=495224&amp;ref_=nav_em_home_lighting_0_2_17_12" class="hmenu-item">Lighting </a></li><li><a href="/gp/browse.html?node=3610841&amp;ref_=nav_em_home_storageandorg_0_2_17_13" class="hmenu-item">Storage &amp; Organization</a></li><li><a href="/gp/browse.html?node=2619525011&amp;ref_=nav_em__ha_0_2_17_14" class="hmenu-item">Appliances</a></li><li><a href="/gp/browse.html?node=6685269011&amp;ref_=nav_em__fine_art_0_2_17_15" class="hmenu-item">Fine Art</a></li><li><a href="/gp/browse.html?node=4991425011&amp;ref_=nav_em__collectibles_fine_art_0_2_17_16" class="hmenu-item">Collectibles &amp; Fine Art</a></li><li><a href="/gp/browse.html?node=2617941011&amp;ref_=nav_em__sch_0_2_17_17" class="hmenu-item">Arts, Crafts &amp; Sewing</a></li><li><a href="/gp/browse.html?node=901590&amp;ref_=nav_em__ep_0_2_17_18" class="hmenu-item">Event &amp; Party Supplies</a></li><li><a href="/gp/browse.html?node=2619533011&amp;ref_=nav_em__ps_0_2_17_19" class="hmenu-item">Pet Supplies</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">tools, home improvement</div></li><li><a href="/gp/browse.html?node=228013&amp;ref_=nav_em__hi2_0_2_17_21" class="hmenu-item">Home Improvement</a></li><li><a href="/gp/browse.html?node=328182011&amp;ref_=nav_em__hi_0_2_17_22" class="hmenu-item">Power &amp; Hand Tools</a></li><li><a href="/gp/browse.html?node=495224&amp;ref_=nav_em__llf_0_2_17_23" class="hmenu-item">Lamps &amp; Light Fixtures</a></li><li><a href="/gp/browse.html?node=3754161&amp;ref_=nav_em__kbf_0_2_17_24" class="hmenu-item">Kitchen &amp; Bath Fixtures</a></li><li><a href="/gp/browse.html?node=289814&amp;ref_=nav_em__cookware_0_2_17_25" class="hmenu-item">Cookware</a></li><li><a href="/gp/browse.html?node=511228&amp;ref_=nav_em__hdw_0_2_17_26" class="hmenu-item">Hardware</a></li><li><a href="/gp/browse.html?node=6563140011&amp;ref_=nav_em__homaut_0_2_17_27" class="hmenu-item">Smart Home</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">more to explore</div></li><li><a href="/gp/browse.html?node=10112676011&amp;ref_=nav_em_home_pinzon_0_2_17_29" class="hmenu-item">Pinzon by Amazon</a></li><li><a href="/gp/browse.html?node=7633572011&amp;ref_=nav_em_home_rivet_0_2_17_30" class="hmenu-item">Rivet by Amazon</a></li><li><a href="/gp/browse.html?node=17384727011&amp;ref_=nav_em_home_stoneandbeam_0_2_17_31" class="hmenu-item">Stone &amp; Beam by Amazon</a></li><li><a href="/gp/browse.html?node=12034488011&amp;ref_=nav_em_home_launchpad_0_2_17_32" class="hmenu-item">Amazon Launchpad</a></li><li><a href="/gp/wedding/homepage?ref_=nav_em_home_weddingregistry_0_2_17_33" class="hmenu-item">Wedding Registry</a></li><li><a href="/move?ref_=nav_em_home_amazonmove_0_2_17_34" class="hmenu-item">Amazon Move</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="18" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_18_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">pet supplies</div></li><li><a href="/yourpets?ref_=nav_em__directory_pet_profiles_0_2_18_2" class="hmenu-item">Pet Profiles</a></li><li><a href="/gp/browse.html?node=2975312011&amp;ref_=nav_em__sd_dg_0_2_18_3" class="hmenu-item">Dog Supplies</a></li><li><a href="/gp/browse.html?node=2975359011&amp;ref_=nav_em__sd_df_0_2_18_4" class="hmenu-item">Dog Food</a></li><li><a href="/gp/browse.html?node=2975241011&amp;ref_=nav_em__sd_ct_0_2_18_5" class="hmenu-item">Cat Supplies</a></li><li><a href="/gp/browse.html?node=2975265011&amp;ref_=nav_em__sd_ctfd_0_2_18_6" class="hmenu-item">Cat Food</a></li><li><a href="/gp/browse.html?node=2975446011&amp;ref_=nav_em__sd_fish_0_2_18_7" class="hmenu-item">Fish &amp; Aquatic Pets</a></li><li><a href="/gp/browse.html?node=2975520011&amp;ref_=nav_em__sd_sa_0_2_18_8" class="hmenu-item">Small Animals</a></li><li><a href="/gp/browse.html?node=2975221011&amp;ref_=nav_em__sd_bird_0_2_18_9" class="hmenu-item">Birds</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="19" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_19_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">grocery &amp; wine</div></li><li><a href="/gp/browse.html?node=16310101&amp;ref_=nav_em__gro_0_2_19_2" class="hmenu-item">Grocery &amp; Gourmet Food</a></li><li><a href="/alm/storefront?almBrandId=QW1hem9uIEZyZXNo&amp;ref_=nav_em_fresh_0_2_19_3" class="hmenu-item">Amazon Fresh</a></li><li><a id="wholefoods" href="/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&amp;ref_=nav_em_navm_whole_foods_storefront_0_2_19_4" class="hmenu-item">Whole Foods</a></li><li><a href="/gp/browse.html?node=7301146011&amp;ref_=nav_em__prime_pantry_0_2_19_5" class="hmenu-item">Pantry</a></li><li><a href="/gp/browse.html?node=12034492011&amp;ref_=nav_em__lpd_gno_csmbl_0_2_19_6" class="hmenu-item">Amazon Launchpad Food</a></li><li><a href="/gp/browse.html?node=5856181011&amp;ref_=nav_em__subscribe_save_0_2_19_7" class="hmenu-item">Subscribe &amp; Save</a></li><li><a href="/gp/browse.html?node=13854994011&amp;ref_=nav_em__wickedlyprime_0_2_19_8" class="hmenu-item">Wickedly Prime</a></li><li><a href="/gp/browse.html?node=19097785011&amp;ref_=nav_em_omps_gno_dt_0_2_19_9" class="hmenu-item">Pay with SNAP EBT</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="20" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_20_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">beauty, health &amp; personal care</div></li><li><a href="/gp/browse.html?node=3760911&amp;ref_=nav_em__bty_0_2_20_2" class="hmenu-item">All Beauty</a></li><li><a href="/gp/browse.html?node=7175545011&amp;ref_=nav_em__luxury_bty_0_2_20_3" class="hmenu-item">Premium Beauty</a></li><li><a href="/gp/browse.html?node=14717647011&amp;ref_=nav_em__pro_skin_0_2_20_4" class="hmenu-item">Professional Skin Care</a></li><li><a href="/gp/browse.html?node=14760453011&amp;ref_=nav_em__salon_spa_0_2_20_5" class="hmenu-item">Salon &amp; Spa</a></li><li><a href="/gp/browse.html?node=6682399011&amp;ref_=nav_em__men_grooming_0_2_20_6" class="hmenu-item">Men’s Grooming</a></li><li><a href="/gp/browse.html?node=3760901&amp;ref_=nav_em__health_household_baby_0_2_20_7" class="hmenu-item">Health, Household &amp; Baby Care</a></li><li><a href="/gp/browse.html?node=3764441&amp;ref_=nav_em__vds_0_2_20_8" class="hmenu-item">Vitamins &amp; Dietary Supplements</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">deals &amp; prime exclusives</div></li><li><a href="/gp/browse.html?node=5856181011&amp;ref_=nav_em__subscribe_save_0_2_20_10" class="hmenu-item">Subscribe &amp; Save</a></li><li><a href="/gp/browse.html?node=7301146011&amp;ref_=nav_em__prime_pantry_0_2_20_11" class="hmenu-item">Pantry</a></li><li><a href="/gp/browse.html?node=2231352011&amp;ref_=nav_em__coupons_0_2_20_12" class="hmenu-item">Coupons</a></li><li><a href="/gp/browse.html?node=8514636011&amp;ref_=nav_em__elements_0_2_20_13" class="hmenu-item">Amazon Elements</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">health &amp; household</div></li><li><a href="/gp/browse.html?node=3760901&amp;ref_=nav_em__H_HH_T2_0_2_20_15" class="hmenu-item">All Health &amp; Household</a></li><li><a href="/gp/browse.html?node=3764441&amp;ref_=nav_em__VDS_T2_0_2_20_16" class="hmenu-item">Vitamins &amp; Dietary Supplements</a></li><li><a href="/gp/browse.html?node=15342811&amp;ref_=nav_em__HH_T2_0_2_20_17" class="hmenu-item">Household Supplies</a></li><li><a href="/gp/browse.html?node=3760941&amp;ref_=nav_em__HC_T2_0_2_20_18" class="hmenu-item">Health Care</a></li><li><a href="/gp/browse.html?node=6973663011&amp;ref_=nav_em__SN_T2_0_2_20_19" class="hmenu-item">Sports Nutrition</a></li><li><a href="/gp/browse.html?node=10787321&amp;ref_=nav_em__BC_T2_0_2_20_20" class="hmenu-item">Baby &amp; Child Care</a></li><li><a href="/gp/browse.html?node=3775161&amp;ref_=nav_em__MSE_T2_0_2_20_21" class="hmenu-item">Medical Supplies &amp; Equipment</a></li><li><a href="/gp/browse.html?node=10079996011&amp;ref_=nav_em__HW_T2_0_2_20_22" class="hmenu-item">Health &amp; Wellness</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="21" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_21_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">toys, kids &amp; baby</div></li><li><a href="/gp/browse.html?node=165793011&amp;ref_=nav_em__tg_0_2_21_2" class="hmenu-item">Toys &amp; Games</a></li><li><a href="/gp/browse.html?node=165796011&amp;ref_=nav_em__ba_0_2_21_3" class="hmenu-item">Baby</a></li><li><a href="/gp/browse.html?node=166764011&amp;ref_=nav_em__baby_diapers_0_2_21_4" class="hmenu-item">Diapering</a></li><li><a href="/gp/browse.html?node=471306&amp;ref_=nav_em__cvg_0_2_21_5" class="hmenu-item">Video Games for Kids</a></li><li><a href="/gp/family/signup?ref_=nav_em__family_0_2_21_6" class="hmenu-item">Amazon Family</a></li><li><a href="/cr/forteens?ref_=nav_em_TDEP_0_2_21_7" class="hmenu-item">Amazon Teen</a></li><li><a href="/baby-reg/homepage?ref_=nav_em__babyreg_0_2_21_8" class="hmenu-item">Baby Registry</a></li><li><a href="/gp/browse.html?node=12693418011&amp;ref_=nav_em__kidsbirthdaynew_0_2_21_9" class="hmenu-item">Kids Birthdays</a></li><li><a href="/gp/browse.html?node=12034506011&amp;ref_=nav_em__lpd_gno_toys_0_2_21_10" class="hmenu-item">Amazon Launchpad</a></li><li><a href="/gp/browse.html?node=8514636011&amp;ref_=nav_em__elements_baby_0_2_21_11" class="hmenu-item">Amazon Elements</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">clothing &amp; shoes</div></li><li><a href="/gp/browse.html?node=7147442011&amp;ref_=nav_em__toys_girls_0_2_21_13" class="hmenu-item">For Girls</a></li><li><a href="/gp/browse.html?node=7147443011&amp;ref_=nav_em__toys_boys_0_2_21_14" class="hmenu-item">For Boys</a></li><li><a href="/gp/browse.html?node=7147444011&amp;ref_=nav_em__toys_baby_0_2_21_15" class="hmenu-item">For Baby</a></li><li><a href="/teenshop?ref_=nav_em_TDEP_0_2_21_16" class="hmenu-item">For Teens</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="22" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_22_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">handmade</div></li><li><a href="/gp/browse.html?node=11260432011&amp;ref_=nav_em__HM_Home_0_2_22_2" class="hmenu-item">All Handmade</a></li><li><a href="/gp/browse.html?node=17296384011&amp;ref_=nav_em__HM_gifts_0_2_22_3" class="hmenu-item">Gifts</a></li><li><a href="/gp/browse.html?node=11403480011&amp;ref_=nav_em__HM_Jewelry_0_2_22_4" class="hmenu-item">Jewelry</a></li><li><a href="/gp/browse.html?node=11403478011&amp;ref_=nav_em__HM_kitchen_0_2_22_5" class="hmenu-item">Home &amp; Kitchen</a></li><li><a href="/gp/browse.html?node=14303223011&amp;ref_=nav_em__HM_wedding_0_2_22_6" class="hmenu-item">Wedding</a></li><li><a href="/gp/browse.html?node=17373067011&amp;ref_=nav_em__HM_clothingShoes_0_2_22_7" class="hmenu-item">Clothing &amp; Shoes</a></li><li><a href="/gp/browse.html?node=11403468011&amp;ref_=nav_em__HM_accessories_0_2_22_8" class="hmenu-item">Handbags &amp; Accessories</a></li><li><a href="/gp/browse.html?node=11403472011&amp;ref_=nav_em__HM_beauty_0_2_22_9" class="hmenu-item">Beauty &amp; Grooming</a></li><li><a href="/gp/browse.html?node=11435470011&amp;ref_=nav_em__HM_stationery_0_2_22_10" class="hmenu-item"> Stationery &amp; Party Supplies</a></li><li><a href="/gp/browse.html?node=11403495011&amp;ref_=nav_em__HM_petsupplies_0_2_22_11" class="hmenu-item">Toys &amp; Games</a></li><li><a href="/gp/browse.html?node=11403488011&amp;ref_=nav_em__HM_petsupplies_0_2_22_12" class="hmenu-item">Pet Supplies</a></li><li><a href="/gp/browse.html?node=11434552011&amp;ref_=nav_em__HM_homedecor_0_2_22_13" class="hmenu-item">Home Décor</a></li><li><a href="/gp/browse.html?node=11433412011&amp;ref_=nav_em__HM_artwork_0_2_22_14" class="hmenu-item">Artwork</a></li><li><a href="/gp/browse.html?node=11434959011&amp;ref_=nav_em__HM_kitchen_0_2_22_15" class="hmenu-item">Kitchen &amp; Dining </a></li><li><a href="/gp/browse.html?node=11433453011&amp;ref_=nav_em__HM_furniture_0_2_22_16" class="hmenu-item">Furniture</a></li><li><a href="/gp/browse.html?node=11403470011&amp;ref_=nav_em__HM_baby_0_2_22_17" class="hmenu-item">Baby</a></li><li><a href="https://services.amazon.com/handmade/handmade.html?ld=AZUSHND_HM_amz_directory&amp;ref_=nav_em_0_2_22_18" class="hmenu-item">Sell on Amazon Handmade</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title "> featured stores</div></li><li><a href="/gp/browse.html?node=13283810011&amp;ref_=nav_em__HM_mii_0_2_22_20" class="hmenu-item">Made in Italy</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="23" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_23_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">sports</div></li><li><a href="/gp/browse.html?node=11444071011&amp;ref_=nav_em__sa_sp_athclg_0_2_23_2" class="hmenu-item">Athletic Clothing</a></li><li><a href="/gp/browse.html?node=3407731&amp;ref_=nav_em__sa_sp_exfit_0_2_23_3" class="hmenu-item">Exercise &amp; Fitness</a></li><li><a href="/gp/browse.html?node=706813011&amp;ref_=nav_em__hntfsh_0_2_23_4" class="hmenu-item">Hunting &amp; Fishing</a></li><li><a href="/gp/browse.html?node=706809011&amp;ref_=nav_em__sa_sp_team_0_2_23_5" class="hmenu-item">Team Sports</a></li><li><a href="/gp/browse.html?node=3410851&amp;ref_=nav_em__sa_sp_golf_0_2_23_6" class="hmenu-item">Golf</a></li><li><a href="/fanshop?ref_=nav_em_0_2_23_7" class="hmenu-item">Fan Shop</a></li><li><a href="/gp/browse.html?node=706808011&amp;ref_=nav_em__sa_sp_gamerm_0_2_23_8" class="hmenu-item">Leisure Sports &amp; Game Room</a></li><li><a href="/gp/browse.html?node=3250697011&amp;ref_=nav_em__sa_sp_sptcllct_0_2_23_9" class="hmenu-item">Sports Collectibles</a></li><li><a href="/gp/browse.html?node=10971181011&amp;ref_=nav_em__sa_sp_allsport_0_2_23_10" class="hmenu-item">All Sports &amp; Fitness</a></li><li><a href="/gp/browse.html?node=12034909011&amp;ref_=nav_em__lpd_gno_sports_0_2_23_11" class="hmenu-item">New Gear Innovations</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="24" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_24_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">outdoors</div></li><li><a href="/gp/browse.html?node=11443874011&amp;ref_=nav_em__sa_out_outcloth_0_2_24_2" class="hmenu-item">Outdoor Clothing</a></li><li><a href="/gp/browse.html?node=3400371&amp;ref_=nav_em__sa_out_camphike_0_2_24_3" class="hmenu-item">Camping &amp; Hiking</a></li><li><a href="/gp/browse.html?node=3402401&amp;ref_=nav_em__sa_out_climb_0_2_24_4" class="hmenu-item">Climbing</a></li><li><a href="/gp/browse.html?node=3403201&amp;ref_=nav_em__sa_out_cyc_0_2_24_5" class="hmenu-item">Cycling</a></li><li><a href="/gp/browse.html?node=11051398011&amp;ref_=nav_em__sa_out_scooskate_0_2_24_6" class="hmenu-item">Scooters, Skateboards &amp; Skates</a></li><li><a href="/gp/browse.html?node=11051399011&amp;ref_=nav_em__sa_out_water_0_2_24_7" class="hmenu-item">Water Sports</a></li><li><a href="/gp/browse.html?node=2204518011&amp;ref_=nav_em__sa_out_wintersport_0_2_24_8" class="hmenu-item">Winter Sports</a></li><li><a href="/gp/browse.html?node=11051400011&amp;ref_=nav_em__sa_out_accout_0_2_24_9" class="hmenu-item">Accessories</a></li><li><a href="/gp/browse.html?node=706814011&amp;ref_=nav_em__sa_out_alloutrec_0_2_24_10" class="hmenu-item">All Outdoor Recreation</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="25" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_25_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">automotive</div></li><li><a href="/gp/browse.html?node=15684181&amp;ref_=nav_em__apa_0_2_25_2" class="hmenu-item">Automotive Parts &amp; Accessories</a></li><li><a href="/gp/browse.html?node=15706941&amp;ref_=nav_em__ate_0_2_25_3" class="hmenu-item">Automotive Tools &amp; Equipment</a></li><li><a href="/gp/browse.html?node=3248684011&amp;ref_=nav_em__ceg_0_2_25_4" class="hmenu-item">Car/Vehicle Electronics &amp; GPS</a></li><li><a href="/gp/browse.html?node=15706571&amp;ref_=nav_em__wt_0_2_25_5" class="hmenu-item">Tires &amp; Wheels</a></li><li><a href="/gp/browse.html?node=346333011&amp;ref_=nav_em__matv_0_2_25_6" class="hmenu-item">Motorcycle &amp; Powersports</a></li><li><a href="/gp/browse.html?node=2258019011&amp;ref_=nav_em__ate_0_2_25_7" class="hmenu-item">RV Parts &amp; Accessories</a></li><li><a href="/gp/browse.html?node=10677469011&amp;ref_=nav_em_vdp_store_0_2_25_8" class="hmenu-item">Vehicles</a></li><li><a href="/gp/your-garage/?ref_=nav_em_au_pf_as_GNO_0_2_25_9" class="hmenu-item">Your Garage</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">industrial &amp; scientific</div></li><li><a href="/gp/browse.html?node=16310091&amp;ref_=nav_em__ind_sup_0_2_25_11" class="hmenu-item">Industrial Supplies</a></li><li><a href="/gp/browse.html?node=317970011&amp;ref_=nav_em__ind_lab_0_2_25_12" class="hmenu-item">Lab &amp; Scientific</a></li><li><a href="/gp/browse.html?node=317971011&amp;ref_=nav_em__ind_jan_0_2_25_13" class="hmenu-item">Janitorial</a></li><li><a href="/gp/browse.html?node=318135011&amp;ref_=nav_em__ind_saf_0_2_25_14" class="hmenu-item">Safety</a></li><li><a href="/gp/browse.html?node=6054382011&amp;ref_=nav_em__ind_fs_0_2_25_15" class="hmenu-item">Food Service</a></li><li><a href="/gp/browse.html?node=256346011&amp;ref_=nav_em__ind_mh_0_2_25_16" class="hmenu-item">Material Handling</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="26" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_26_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">whole foods market</div></li><li><a href="/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&amp;ref_=nav_em_navm_whole_foods_storefront_0_2_26_2" class="hmenu-item">Explore Whole Foods Market</a></li><li><a href="https://www.amazon.com/wholefoodsdeals?ref_=nav_em_wf_deals_0_2_26_3" class="hmenu-item">This Week's Deals</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="27" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_27_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">amazon physical stores</div></li><li><a href="/gp/browse.html?node=13270229011&amp;ref_=nav_em_AMZBKS_SD_Desktop_0_2_27_2" class="hmenu-item">Amazon Books</a></li><li><a href="/gp/browse.html?node=17988552011&amp;ref_=nav_em_AMZ4STR_SD_Desktop_0_2_27_3" class="hmenu-item">Amazon 4-star</a></li><li><a href="/gp/browse.html?node=16008589011&amp;ref_=nav_em_SiteDirectory_Desktop_0_2_27_4" class="hmenu-item">Amazon Go</a></li><li><a href="/gp/browse.html?node=17608448011&amp;ref_=nav_em_AMZSTRS_SD_Desktop_0_2_27_5" class="hmenu-item">Find a store near you</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="28" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_28_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">make money with amazon</div></li><li><a href="/b?ld=AZUSSOA-sitedirectory&amp;node=12766669011&amp;ref_=nav_em_nav_cs_sell_0_2_28_2" class="hmenu-item">Sell on Amazon</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="29" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_29_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">home services</div></li><li><a href="/gp/browse.html?node=10192838011&amp;ref_=nav_em__localsvs_hometheater_0_2_29_2" class="hmenu-item">Home Theater Setup</a></li><li><a href="/gp/browse.html?node=11525233011&amp;ref_=nav_em__localsvs_assembly_0_2_29_3" class="hmenu-item">Furniture Assembly</a></li><li><a href="/gp/browse.html?node=10192832011&amp;ref_=nav_em__localsvs_outdoorassembly_0_2_29_4" class="hmenu-item">Outdoor Equipment Assembly</a></li><li><a href="/gp/browse.html?node=14586916011&amp;ref_=nav_em__localsvs_smarthome_0_2_29_5" class="hmenu-item">Smart Home Services</a></li><li><a href="/gp/browse.html?node=8098158011&amp;ref_=nav_em__localsvs_all_0_2_29_6" class="hmenu-item">All Home Services</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="30" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_30_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">gift cards</div></li><li><a href="/gp/browse.html?node=2238192011&amp;ref_=nav_em_ShopByDept_GC_Desktop_all_0_2_30_2" class="hmenu-item">All gift cards</a></li><li><a href="/s?bbn=2238192011&amp;page=1&amp;rh=n%3A2238192011%2Cp_n_format_browse-bin%3A2740964011%2Cp_89%3AAmazon&amp;ref_=nav_em__giftcardsnav_0_2_30_3" class="hmenu-item">eGift cards</a></li><li><a href="/s?bbn=2238192011&amp;page=1&amp;rh=n%3A2238192011%2Cp_89%3AAmazon%2Cp_n_format_browse-bin%3A2740967011&amp;ref_=nav_em__giftcardsnav_0_2_30_4" class="hmenu-item">Gift cards by mail</a></li><li><a href="https://www.amazon.com/asv/reload/order/?_encoding=UTF8&amp;ref_=nav_em_sv_gc_5_0_2_30_5" class="hmenu-item">Reload your balance</a></li><li><a href="/gp/browse.html?node=14583169011&amp;ref_=nav_em_ShopByDept_GC_Desktop_0_2_30_6" class="hmenu-item">Amazon Cash</a></li><li><a href="/gp/browse.html?node=2864196011&amp;ref_=nav_em_ShopByDept_GC_Desktop_0_2_30_7" class="hmenu-item">Third-party gift cards</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="31" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_31_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">credit cards</div></li><li><a href="/iss/credit/storecardmember?plattr=PLCCGNO&amp;ref_=nav_em__credit_plcc_0_2_31_2" class="hmenu-item">Amazon.com Store Card</a></li><li><a href="/iss/credit/rewardscardmember?plattr=CBCCGNO&amp;ref_=nav_em__credit_cbcc_0_2_31_3" class="hmenu-item">Amazon Rewards Visa Signature Cards</a></li><li><a href="/dp/B07984JN3L?plattr=ACOMGNO&amp;ref_=nav_em__credit_sbcc_0_2_31_4" class="hmenu-item">Amazon Business Card</a></li><li><a href="/dp/B07CBJQS16?plattr=GNO_CCL&amp;pr=ibprox&amp;ref_=nav_em__credit_ccl_0_2_31_5" class="hmenu-item">Amazon.com Corporate Credit Line</a></li><li><a href="/gp/browse.html?node=3561432011&amp;ref_=nav_em_credit_ccmp_0_2_31_6" class="hmenu-item">Credit Card Marketplace</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">payment products</div></li><li><a href="/gp/browse.html?node=16218619011&amp;ref_=nav_em__credit_swp_0_2_31_8" class="hmenu-item">Shop with Points at Amazon</a></li><li><a href="/gp/browse.html?node=14583169011&amp;ref_=nav_em__amzcash_0_2_31_9" class="hmenu-item">Amazon Cash</a></li><li><a href="/gp/browse.html?node=388305011&amp;ref_=nav_em__credit_tfx_0_2_31_10" class="hmenu-item">Amazon Currency Converter</a></li><li><a href="/gp/browse.html?node=10232440011&amp;ref_=nav_em_gno_balance_0_2_31_11" class="hmenu-item">Reload Your Amazon Balance</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="32" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_32_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">amazon launchpad</div></li><li><a href="/gp/browse.html?node=12034488011&amp;ref_=nav_em_al_fsd_all_0_2_32_2" class="hmenu-item">Shop today's emerging brands</a></li><li><a href="/gp/browse.html?node=21179680011&amp;ref_=nav_em_al_fsd_body_0_2_32_3" class="hmenu-item">Beauty &amp; Health</a></li><li><a href="/gp/browse.html?node=21179679011&amp;ref_=nav_em_al_fsd_food_0_2_32_4" class="hmenu-item">Grocery</a></li><li><a href="/gp/browse.html?node=21179674011&amp;ref_=nav_em_al_fsd_gadgets_0_2_32_5" class="hmenu-item">Electronics</a></li><li><a href="/gp/browse.html?node=21179675011&amp;ref_=nav_em_al_fsd_house_0_2_32_6" class="hmenu-item">Home</a></li><li><a href="/gp/browse.html?node=21179677011&amp;ref_=nav_em_al_fsd_toys_0_2_32_7" class="hmenu-item">Toys</a></li><li><a href="/gp/browse.html?node=12632031011&amp;ref_=nav_em_al_fsd_collections_0_2_32_8" class="hmenu-item">Collections</a></li><li><a href="/gp/browse.html?node=13270237011&amp;ref_=nav_em_al_fsd_gifts_0_2_32_9" class="hmenu-item">Gifts</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="33" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_33_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">subscription boxes</div></li><li><a href="/gp/browse.html?node=14498690011&amp;ref_=nav_em_all_subscribe_0_2_33_2" class="hmenu-item">All Subscription Boxes</a></li><li><a href="/gp/browse.html?node=17752724011&amp;ref_=nav_em_beauty_0_2_33_3" class="hmenu-item">Beauty Boxes</a></li><li><a href="/gp/browse.html?node=17795802011&amp;ref_=nav_em_food_and_drink_0_2_33_4" class="hmenu-item">Food &amp; Drink Boxes</a></li><li><a href="/gp/browse.html?node=17795805011&amp;ref_=nav_em_toys_and_kids_0_2_33_5" class="hmenu-item">Toys &amp; Kids Boxes</a></li><li><a href="/gp/browse.html?node=17795804011&amp;ref_=nav_em_lifestyle_0_2_33_6" class="hmenu-item">Lifestyle Boxes</a></li><li><a href="/gp/browse.html?node=17795803011&amp;ref_=nav_em_pets_0_2_33_7" class="hmenu-item">Pets Boxes</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="34" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_34_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">amazon live</div></li><li><a href="/live?ref_=nav_em_sd_al_dest_0_2_34_2" class="hmenu-item">Live</a></li><li><a href="/live?ref_=nav_em_sd_al_dest#recently_0_2_34_3" class="hmenu-item">Recently Live</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="35" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_35_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">treasure truck</div></li><li><a href="/treasuretruck?ref_=nav_em_sd_tt_start_0_2_35_2" class="hmenu-item">Get Started</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="36" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_36_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">international shopping</div></li><li><a href="/gp/help/customer/display.html?nodeId=201910800&amp;ref_=nav_em_full_store_dir_AG_shipping_0_2_36_2" class="hmenu-item">Where we ship</a></li><li><a href="/gp/browse.html?node=17416544011&amp;ref_=nav_em_full_store_dir_VisitAg_help_0_2_36_3" class="hmenu-item">Visit Amazon Global</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="37" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_37_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">amazon photos</div></li><li><a href="/photos/home?ref_=nav_em__gw_prime_learn_0_2_37_2" class="hmenu-item">Amazon Photos</a></li><li><a href="/photos/apps?ref_=nav_em__gw_photos_apps_0_2_37_3" class="hmenu-item">Get the apps</a></li><li><a href="/photos?sf=1&amp;ref_=nav_em__gw_photos_login_0_2_37_4" class="hmenu-item">Sign in</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">amazon drive</div></li><li><a href="/gp/browse.html?node=15547130011&amp;ref_=nav_em__gw_dr_about_0_2_37_6" class="hmenu-item">Amazon Drive</a></li><li><a href="/gp/drive/download-apps?ref_=nav_em__gw_dl_apps_0_2_37_7" class="hmenu-item">Get the apps</a></li><li><a href="/clouddrive?sf=1&amp;ref_=nav_em__gw_drive_login_0_2_37_8" class="hmenu-item">Sign in</a></li><li class="hmenu-separator"></li><li><div class="hmenu-item hmenu-title ">amazon prints</div></li><li><a href="/gp/browse.html?node=14866317011&amp;ref_=nav_em__gw_print_about_0_2_37_10" class="hmenu-item">Online photo printing</a></li>
  <li class="hmenu-separator"></li>
</ul>
<ul class="hmenu hmenu-translateX-right dsk-hmenu-reorganization" data-menu-id="38" data-parent-menu-id="1">
  <li><a href="/" class="hmenu-item hmenu-back-button" aria-label="Back to main menu" data-ref-tag="nav_em_1_38_BT_0_main_menu"><div style="align-items: center;"><i class="nav-sprite hmenu-arrow-prev"></i>main menu</div></a></li>
  <li><div class="hmenu-item hmenu-title ">small &amp; medium businesses</div></li><li><a href="/gp/browse.html?node=17879387011&amp;ref_=nav_em_sbp_21_all_0_2_38_2" class="hmenu-item">Shop Small &amp; Medium Businesses</a></li><li><a href="/gp/browse.html?node=17964635011&amp;ref_=nav_em_sbp_21_wob_0_2_38_3" class="hmenu-item">Discover Women-Owned Businesses</a></li><li><a href="/gp/browse.html?node=17964634011&amp;ref_=nav_em_sbp_21_ffb_0_2_38_4" class="hmenu-item">Explore Family-Focused Businesses</a></li><li><a href="/gp/browse.html?node=17964632011&amp;ref_=nav_em_sbp_21_art_0_2_38_5" class="hmenu-item">Support Artisans</a></li><li><a href="/gp/browse.html?node=17964637011&amp;ref_=nav_em_sbp_21_inn_0_2_38_6" class="hmenu-item">Celebrate Innnovator-Makers</a></li>
  <li class="hmenu-separator"></li>
</ul>
</div>
    <a id="hmenu-back-to-top" class="hmenu-hidden-link nav-side-menu-back-to-top" href="javascript:void(0)"><div>Back to top</div></a>
  </div>
</aside>`)

globalThis.customElements.define('nav-a',
    class extends globalThis.HTMLElement
    {
        constructor()
	{
            super()
            this.attachShadow({mode:'closed'}).innerHTML = `
<style>
    :host
    {
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        padding-top:1ex;
        padding-left:1em;
        padding-bottom:1ex;
        padding-right:1em
    }
    :host > a
    {
        font-size:small;
        color:white;
        text-decoration:none;
        border-width:1px;
        border-radius:2px;
        padding:0.5em 1em;
    }
    :host > a:hover {border-style:solid}
</style>
<div onclick='globalThis.document.querySelector("aside").style.width="20%"' style='font-size:14px'>&#x2630;All</div>
<a href='gift-cards.html'>Gift Cards</a>
<a href='bestsellers.html'>Best Sellers</a>
<a href='prime.html'>Prime<span class="nav-icon nav-arrow"></span></a>
<a href='customer.html'>Customer Service</a>
<a href='new-releases.html'>New Releases</a>
<a href='gifts.html'>Find a Gift</a>
<a href='foods.html'>Whole Foods</a>
<a href='amazonbasics.html'>AmazonBasics</a>
<a href='deals.html'>Today's Deals</a>
<a href='sell.html'>Sell</a>
<a href='coupons.html'>Coupons</a>
<a href='freeshipping.html'>Free Shipping</a>
<a href='registries.html'>Registry</a>
<a href='foundit.html'>#FoundItOnAmazon</a>
<a href='shoppertoolkit.html'>Shopper Toolkit</a>
<a style='margin-left:auto'>Shop Holiday Gift Guides</a>`
	}
    })

globalThis.document.querySelector('#footer').outerHTML = `
<div class='navLeftFooter nav-sprite-v1' id='navFooter'><a href="#nav-top" id="navBackToTop"><div class="navFooterBackToTop"><span class="navFooterBackToTopText">Back to top</span></div></a>

<div class="navFooterVerticalColumn navAccessibility" role="presentation"><div class="navFooterVerticalRow navAccessibility" style="display: table-row;"><div class="navFooterLinkCol navAccessibility"><div class="navFooterColHead">Get to Know Us</div><ul><li class='nav_first'><a href='https://www.amazon.jobs' class='nav_a'>Careers</a></li><li><a href='https://blog.aboutamazon.com/?utm_source=gateway&amp;utm_medium=footer' class='nav_a'>Blog</a></li><li><a href='https://www.aboutamazon.com/?utm_source=gateway&amp;utm_medium=footer' class='nav_a'>About Amazon</a></li><li><a href='https://www.amazon.com/pr' class='nav_a'>Press Center</a></li><li><a href='https://www.amazon.com/ir' class='nav_a'>Investor Relations</a></li><li><a href='/amazon-devices/b?ie=UTF8&amp;node=2102313011&amp;ref_=footer_devices' class='nav_a'>Amazon Devices</a></li><li class='nav_last'><a href='https://www.aboutamazon.com/amazon-fulfillment-center-tours?utm_source=gateway&amp;utm_medium=footer&amp;utm_campaign=fctours' class='nav_a'>Amazon Tours</a></li></ul></div><div class="navFooterColSpacerInner navAccessibility"></div><div class="navFooterLinkCol navAccessibility"><div class="navFooterColHead">Make Money with Us</div><ul><li class='nav_first'><a href='/gp/redirect.html?_encoding=UTF8&amp;location=https%3A%2F%2Fsell.amazon.com%2F%3Fld%3DAZFSSOA%26ref_%3Dfooter_soa&amp;source=standards&amp;token=F8DC1C821506E40D2CFF1864EE5EC23698540D23' class='nav_a'>Sell products on Amazon</a></li><li><a href='https://developer.amazon.com' class='nav_a'>Sell apps on Amazon</a></li><li><a href='https://affiliate-program.amazon.com/' class='nav_a'>Become an Affiliate</a></li><li><a href='https://advertising.amazon.com/?ref=ext_amzn_ftr' class='nav_a'>Advertise Your Products</a></li><li><a href='/gp/seller-account/mm-summary-page.html?ie=UTF8&amp;ld=AZFooterSelfPublish&amp;ref_=footer_publishing&amp;topic=200260520' class='nav_a'>Self-Publish with Us</a></li><li><a href='https://www.amazon.com/b/?node=13853235011' class='nav_a'>Host an Amazon Hub</a></li><li class='nav_last nav_a_carat'><span class="nav_a_carat">&rsaquo;</span><a href='/b/?_encoding=UTF8&amp;ld=AZUSSOA-seemore&amp;node=18190131011&amp;ref_=footer_seemore' class='nav_a'>See More Make Money with Us</a></li></ul></div><div class="navFooterColSpacerInner navAccessibility"></div><div class="navFooterLinkCol navAccessibility"><div class="navFooterColHead">Amazon Payment Products</div><ul><li class='nav_first'><a href='/iss/credit/rewardscardmember?_encoding=UTF8&amp;plattr=CBFOOT&amp;ref_=footer_cbcc' class='nav_a'>Amazon Rewards Visa Signature Cards</a></li><li><a href='/credit/storecard/member?_encoding=UTF8&amp;plattr=PLCCFOOT&amp;ref_=footer_plcc' class='nav_a'>Amazon.com Store Card</a></li><li><a href='/dp/B07984JN3L?_encoding=UTF8&amp;ie=UTF-8&amp;plattr=ACOMFO' class='nav_a'>Amazon Business Card</a></li><li><a href='/dp/B07CBJQS16?_encoding=UTF8&amp;ie=UTF-8&amp;place=camp&amp;plattr=CCLFOOT&amp;pr=ibprox&amp;ref_=footer_ccl' class='nav_a'>Amazon Business Line of Credit</a></li><li><a href='/b?ie=UTF8&amp;node=16218619011&amp;ref_=footer_swp' class='nav_a'>Shop with Points</a></li><li><a href='/compare-credit-card-offers/b?ie=UTF8&amp;node=3561432011&amp;ref_=footer_ccmp' class='nav_a'>Credit Card Marketplace</a></li><li><a href='/Reload-Your-Gift-Card-Balance/b?ie=UTF8&amp;node=10232440011&amp;ref_=footer_reload_us' class='nav_a'>Reload Your Balance</a></li><li class='nav_last'><a href='/Currency-Converter/b?ie=UTF8&amp;node=388305011&amp;ref_=footer_tfx' class='nav_a'>Amazon Currency Converter</a></li></ul></div><div class="navFooterColSpacerInner navAccessibility"></div><div class="navFooterLinkCol navAccessibility"><div class="navFooterColHead">Let Us Help You</div><ul><li class='nav_first'><a href='/gp/help/customer/display.html?ie=UTF8&amp;nodeId=GDFU3JS5AL6SYHRD&amp;ref_=footer_covid' class='nav_a'>Amazon and COVID-19</a></li><li><a href='/gp/css/homepage.html?ie=UTF8&amp;ref_=footer_ya' class='nav_a'>Your Account</a></li><li><a href='/gp/css/order-history?ie=UTF8&amp;ref_=footer_yo' class='nav_a'>Your Orders</a></li><li><a href='/gp/help/customer/display.html?ie=UTF8&amp;nodeId=468520&amp;ref_=footer_shiprates' class='nav_a'>Shipping Rates & Policies</a></li><li><a href='/gp/prime?ie=UTF8&amp;ref_=footer_prime' class='nav_a'>Amazon Prime</a></li><li><a href='/gp/css/returns/homepage.html?ie=UTF8&amp;ref_=footer_hy_f_4' class='nav_a'>Returns & Replacements</a></li><li><a href='/hz/mycd/myx?_encoding=UTF8&amp;ref_=footer_myk' class='nav_a'>Manage Your Content and Devices</a></li><li><a href='/gp/BIT/ref=footer_bit_v2_us_A0029?bitCampaignCode=A0029' class='nav_a'>Amazon Assistant</a></li><li class='nav_last'><a href='/gp/help/customer/display.html?ie=UTF8&amp;nodeId=508510&amp;ref_=footer_gw_m_b_he' class='nav_a'>Help</a></li></ul></div></div></div><div class="nav-footer-line"></div>
   
<div class="navFooterLine navFooterLinkLine navFooterPadItemLine"><span><div class="navFooterLine navFooterLogoLine"><a href="/ref=footer_logo"><div class="nav-logo-base nav-sprite"></div></a></div>
</span><ul></ul><span class="icp-container-desktop"><div class="navFooterLine">












  





<style type="text/css">
  #icp-touch-link-language { display: none; }
</style>

<a href="/gp/customer-preferences/select-language/ref=footer_lang?ie=UTF8&preferencesReturnUrl=%2F" class="icp-button" id="icp-touch-link-language">
  <div class="icp-nav-globe-img-2 icp-button-globe-2"></div
  ><span class="icp-color-base">English</span
  ><span class="nav-arrow icp-up-down-arrow"></span
  ><span class="aok-hidden" style="display:none">Choose a language for shopping.</span>
</a>












<style type="text/css">
#icp-touch-link-country { display: none; }
</style>

  



<a href="/gp/navigation-country/select-country/ref=footer_icp_cp?ie=UTF8&preferencesReturnUrl=%2F" class="icp-button" id="icp-touch-link-country">
  <span class="icp-flag-3 icp-flag-3-us"></span
  ><span class="icp-color-base">United States</span
  ><span class="aok-hidden" style="display:none">Choose a country/region for shopping.</span>
</a>


</div>
</span><ul></ul></div>

<div class="navFooterLine navFooterLinkLine navFooterDescLine"role="navigation" aria-label="More on Amazon.com"><table class="navFooterMoreOnAmazon" cellspacing="0"><tr>
<td class="navFooterDescItem"><a href='https://music.amazon.com?ref=dm_aff_amz_com' class='nav_a'>Amazon Music<br/> <span class="navFooterDescText">Stream millions<br/> of songs</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://advertising.amazon.com/?ref=footer_advtsing_amzn_com' class='nav_a'>Amazon Advertising<br/> <span class="navFooterDescText">Find, attract, and<br/> engage customers</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/STRING-subnav_primephotos_amazondrive/b?ie=UTF8&amp;node=15547130011&amp;ref_=us_footer_drive' class='nav_a'>Amazon Drive<br/> <span class="navFooterDescText">Cloud storage<br/> from Amazon</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.6pm.com' class='nav_a'>6pm<br/> <span class="navFooterDescText">Score deals<br/> on fashion brands</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.abebooks.com' class='nav_a'>AbeBooks<br/> <span class="navFooterDescText">Books, art<br/> & collectibles</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.acx.com/' class='nav_a'>ACX <br/> <span class="navFooterDescText">Audiobook Publishing<br/> Made Easy</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.alexa.com' class='nav_a'>Alexa<br/> <span class="navFooterDescText">Actionable Analytics<br/> for the Web</span></a></td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td class="navFooterDescItem"><a href='/gp/redirect.html?_encoding=UTF8&amp;location=https%3A%2F%2Fsell.amazon.com%2F%3Fld%3DAZUSSOA-footer-aff%26ref_%3Dfooter_sell&amp;source=standards&amp;token=5C1C6935C910A355A9EFF638456512B3EE3E32AC' class='nav_a'>Sell on Amazon<br/> <span class="navFooterDescText">Start a Selling Account</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/business?_encoding=UTF8&amp;ref_=footer_retail_b2b' class='nav_a'>Amazon Business<br/> <span class="navFooterDescText">Everything For<br/> Your Business</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/alm/storefront?_encoding=UTF8&amp;almBrandId=QW1hem9uIEZyZXNo&amp;ref_=footer_aff_fresh' class='nav_a'>Amazon Fresh<br/> <span class="navFooterDescText">Groceries & More<br/> Right To Your Door</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/International-Shipping-Direct/b?ie=UTF8&amp;node=230659011&amp;ref_=footer_amazonglobal' class='nav_a'>AmazonGlobal<br/> <span class="navFooterDescText">Ship Orders<br/> Internationally</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/services?_encoding=UTF8&amp;ref_=footer_services' class='nav_a'>Home Services<br/> <span class="navFooterDescText">Experienced Pros<br/> Happiness Guarantee</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://ignite.amazon.com/?ref=amazon_footer_ignite' class='nav_a'>Amazon Ignite<br/> <span class="navFooterDescText">Sell your original<br/> Digital Educational<br/> Resources</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://rapids.amazon.com/?ref=rapids_acq_gatewayfooter' class='nav_a'>Amazon Rapids<br/> <span class="navFooterDescText">Fun stories for<br/>  kids on the go</span></a></td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td class="navFooterDescItem"><a href='https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=amazonfooter' class='nav_a'>Amazon Web Services<br/> <span class="navFooterDescText">Scalable Cloud<br/> Computing Services</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.audible.com' class='nav_a'>Audible<br/> <span class="navFooterDescText">Listen to Books & Original<br/> Audio Performances</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.bookdepository.com' class='nav_a'>Book Depository<br/> <span class="navFooterDescText">Books With Free<br/> Delivery Worldwide</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.boxofficemojo.com/?ref_=amzn_nav_ftr' class='nav_a'>Box Office Mojo<br/> <span class="navFooterDescText">Find Movie<br/> Box Office Data</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.comixology.com' class='nav_a'>ComiXology<br/> <span class="navFooterDescText">Thousands of<br/> Digital Comics</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.dpreview.com' class='nav_a'>DPReview<br/> <span class="navFooterDescText">Digital<br/> Photography</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.eastdane.com/welcome' class='nav_a'>East Dane<br/> <span class="navFooterDescText">Designer Men's<br/> Fashion</span></a></td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td class="navFooterDescItem"><a href='https://www.fabric.com' class='nav_a'>Fabric<br/> <span class="navFooterDescText">Sewing, Quilting<br/> & Knitting</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.goodreads.com' class='nav_a'>Goodreads<br/> <span class="navFooterDescText">Book reviews<br/> & recommendations</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.imdb.com' class='nav_a'>IMDb<br/> <span class="navFooterDescText">Movies, TV<br/> & Celebrities</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://pro.imdb.com?ref_=amzn_nav_ftr' class='nav_a'>IMDbPro<br/> <span class="navFooterDescText">Get Info Entertainment<br/> Professionals Need</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://kdp.amazon.com' class='nav_a'>Kindle Direct Publishing<br/> <span class="navFooterDescText">Indie Digital & Print Publishing<br/> Made Easy
</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://primenow.amazon.com/?ref=HOUD12C322_0_GlobalFooter' class='nav_a'>	
Prime Now<br/> <span class="navFooterDescText">FREE 2-hour Delivery<br/> on Everyday Items</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/STRING-subnav-prime-photos/b?ie=UTF8&amp;node=13234696011&amp;ref_=gno_p_foot' class='nav_a'>Amazon Photos<br/> <span class="navFooterDescText">Unlimited Photo Storage<br/> Free With Prime</span></a></td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td class="navFooterDescItem"><a href='https://videodirect.amazon.com/home/landing' class='nav_a'>Prime Video Direct<br/> <span class="navFooterDescText">Video Distribution<br/> Made Easy</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.shopbop.com/welcome' class='nav_a'>Shopbop<br/> <span class="navFooterDescText">Designer<br/> Fashion Brands</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/Warehouse-Deals/b?ie=UTF8&amp;node=10158976011&amp;ref_=footer_wrhsdls' class='nav_a'>Amazon Warehouse<br/> <span class="navFooterDescText">Great Deals on<br/> Quality Used Products </span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.wholefoodsmarket.com' class='nav_a'>Whole Foods Market<br/> <span class="navFooterDescText">America’s Healthiest<br/> Grocery Store</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.woot.com/' class='nav_a'>Woot!<br/> <span class="navFooterDescText">Deals and <br/> Shenanigans</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.zappos.com' class='nav_a'>Zappos<br/> <span class="navFooterDescText">Shoes &<br/> Clothing</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://ring.com' class='nav_a'>Ring<br/> <span class="navFooterDescText">Smart Home<br/> Security Systems
</span></a></td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td class="navFooterDescItem"><a href='https://eero.com/' class='nav_a'>eero WiFi<br/> <span class="navFooterDescText">Stream 4K Video<br/> in Every Room</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://shop.ring.com/pages/neighbors-app' class='nav_a'>Neighbors App <br/> <span class="navFooterDescText"> Real-Time Crime<br/> & Safety Alerts
</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/b?ie=UTF8&amp;node=14498690011&amp;ref_=amzn_nav_ftr_swa' class='nav_a'>Amazon Subscription Boxes<br/> <span class="navFooterDescText">Top subscription boxes – right to your door</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.pillpack.com' class='nav_a'>PillPack<br/> <span class="navFooterDescText">Pharmacy Simplified</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/Certified-Refurbished/b?ie=UTF8&amp;node=12653393011&amp;ref_=footer_usrenew' class='nav_a'>Amazon Renewed<br/> <span class="navFooterDescText">Like-new products<br/> you can trust</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/amazonsecondchance?_encoding=UTF8&amp;ref_=footer_asc' class='nav_a'>Amazon Second Chance<br/> <span class="navFooterDescText">Pass it on, trade it in,<br/> give it a second life</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem">&nbsp;</td>
</tr>
</table></div>
   
<div class="navFooterLine navFooterLinkLine navFooterPadItemLine navFooterCopyright"><ul><li class='nav_first'><a href='/gp/help/customer/display.html?ie=UTF8&amp;nodeId=508088&amp;ref_=footer_cou' class='nav_a'>Conditions of Use</a></li><li><a href='/gp/help/customer/display.html?ie=UTF8&amp;nodeId=468496&amp;ref_=footer_privacy' class='nav_a'>Privacy Notice</a></li><li><a href='/interestbasedads/ref=footer_iba' class='nav_a'>Interest-Based Ads</a></li><li class='nav_last'>© 1996-2020, Amazon.com, Inc. or its affiliates</li></ul></div>
</div>`
