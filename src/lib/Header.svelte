<script lang="ts">
	import "@ui5/webcomponents-fiori/dist/ShellBar";
	import "@ui5/webcomponents-fiori/dist/ShellBarItem";
	import "@ui5/webcomponents/dist/Avatar.js";
	import logo from "../assets/imgs/UI5-orange-pheonix-logo.png";
	import type Popover from "@ui5/webcomponents/dist/Popover.js";
	import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
	import { references } from "../stores/stores.svelte";
	import applyDirection from "@ui5/webcomponents-base/dist/locale/applyDirection.js";

	import type { ShellBarItemClickEventDetail } from "@ui5/webcomponents-fiori/dist/ShellBarItem.js";
	import type { ShellBarProfileClickEventDetail } from "@ui5/webcomponents-fiori/ShellBar.js";
	import type { ListItemClickEventDetail, ListSelectionChangeEventDetail } from "@ui5/webcomponents/dist/List.js";

	const shellBarTitle: string = "UI5 Web Components Svelte Sample Application";
	let themeSettingsPopover = $state<Popover | null>(null);
	let profileSettingsPopover = $state<Popover | null>(null);

	function handleThemeSettingsToggle(event: CustomEvent<ShellBarItemClickEventDetail>) {
		if (themeSettingsPopover) {
			themeSettingsPopover.opener = event.detail.targetRef;
			themeSettingsPopover.open = !themeSettingsPopover.open;
		}
	}

	function handleProfileClick(event: CustomEvent<ShellBarProfileClickEventDetail>) {
		if (profileSettingsPopover) {
			profileSettingsPopover.opener = event.detail.targetRef;
			profileSettingsPopover.open = !profileSettingsPopover.open;
		}
	}

	function handleThemeChange(event: CustomEvent<ListSelectionChangeEventDetail>) {
		const dataTheme = event.detail.selectedItems[0].getAttribute("data-theme");

		if (dataTheme) {
			setTheme(dataTheme);
		}
		if (themeSettingsPopover) {
			themeSettingsPopover.open = false;
		}
	}

	function handleRtlSwitchChange(event: { target: { checked: boolean } }) {
		document.body.dir = event.target.checked ? "rtl" : "ltr";
		applyDirection();
	}

	function handleSettingsDialogCloseButtonClick() {
		if (references.dialog.settings) {
			references.dialog.settings.open = false;
		}
	}

	function handleHelpDialogCloseButtonClick() {
		if (references.dialog.help) {
			references.dialog.help.open = false;
		}
	}

	function handleProfileSettingsSelect(event: CustomEvent<ListItemClickEventDetail>) {
		const selectedKey = event.detail.item.getAttribute("data-key");
		if (selectedKey === "settings") {
			if (references.dialog.settings) {
				references.dialog.settings.open = true;
			}
		} else if (selectedKey === "help") {
			if (references.dialog.help) {
				references.dialog.help.open = true;
			}
		}
	}

	function handleContentDensitySwitchChange(event: { target: { checked: boolean } }) {
		if (event.target.checked) {
			document.body.classList.add("ui5-content-density-compact");
		} else {
			document.body.classList.remove("ui5-content-density-compact");
		}
	}
</script>

<header class="app-header">
	<ui5-shellbar primary-title={shellBarTitle} show-notifications notifications-count="2" onprofile-click={handleProfileClick}>
		<img class="app-header-logo" slot="logo" src={logo} alt="ui5 orange pheonix logo" />
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<ui5-shellbar-item icon="palette" text="Theme" onclick={handleThemeSettingsToggle}></ui5-shellbar-item>
		<ui5-avatar slot="profile" size="XS" initials="JD"></ui5-avatar>
	</ui5-shellbar>
</header>

<ui5-popover bind:this={themeSettingsPopover} class="app-bar-theming-popover" placement="Bottom" horizontal-align="End" header-text="Theme">
	<ui5-list selection-mode="Single" onselection-change={handleThemeChange}>
		<ui5-li icon="palette" data-theme="sap_horizon" selected>SAP Horizon Morning</ui5-li>
		<ui5-li icon="palette" data-theme="sap_horizon_dark">SAP Horizon Evening</ui5-li>
		<ui5-li icon="palette" data-theme="sap_horizon_hcb">SAP Horizon HCB</ui5-li>
		<ui5-li icon="palette" data-theme="sap_horizon_hcw">SAP Horizon HCW</ui5-li>
		<ui5-li icon="palette" data-theme="sap_fiori_3">SAP Quartz Light</ui5-li>
		<ui5-li icon="palette" data-theme="sap_fiori_3_dark">SAP Quartz Dark</ui5-li>
		<ui5-li icon="palette" data-theme="sap_fiori_3_hcb">SAP Quartz HCB</ui5-li>
		<ui5-li icon="palette" data-theme="sap_fiori_3_hcw">SAP Quartz HCW</ui5-li>
	</ui5-list>
</ui5-popover>

<ui5-popover bind:this={profileSettingsPopover} id="profile-pop" class="app-bar-profile-popover" placement="Bottom" horizontal-align="End">
	<div class="profile-settings">
		<ui5-avatar size="M" initials="JD"></ui5-avatar>
		<div class="profile-text">
			<ui5-title level="H3">John Doe</ui5-title>
			<ui5-label>Svelte Developer</ui5-label>
		</div>
	</div>

	<div class="profile-settings-list">
		<ui5-list selection-mode="Single" separators="None" onitem-click={handleProfileSettingsSelect} bind:this={profileSettingsPopover}>
			<ui5-li icon="settings" data-key="settings">Settings</ui5-li>
			<ui5-li icon="sys-help" data-key="help">Help</ui5-li>
			<ui5-li icon="log" data-key="sign-out">Sign out</ui5-li>
		</ui5-list>
	</div>
</ui5-popover>

<ui5-dialog bind:this={references.dialog.settings} header-text="Profile Settings" draggable>
	<div>
		<div class="profile-rtl-switch centered">
			<div class="profile-rtl-switch-title">
				<ui5-label class="profile-rtl-switch-text">RTL</ui5-label>
			</div>
			<ui5-switch onchange={handleRtlSwitchChange}></ui5-switch>
		</div>
	</div>

	<div class="profile-rtl-switch centered">
		<div class="profile-rtl-switch-title">
			<ui5-label class="profile-rtl-switch-text">Compact</ui5-label>
		</div>
		<ui5-switch onchange={handleContentDensitySwitchChange}></ui5-switch>
	</div>

	<div class="dialog-button">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<ui5-button onclick={handleSettingsDialogCloseButtonClick} design="Emphasized">Close</ui5-button>
	</div>
</ui5-dialog>

<ui5-dialog bind:this={references.dialog.help} class="help-dialog">
	<div slot="header" class="help-header" id="header-title-align">
		<ui5-icon name="sys-help"></ui5-icon>
		Help
	</div>

	<div class="help-header" id="header-logo-align">
		<img class="app-header-logo" alt="logo" slot="logo" src={logo} />
		<ui5-title level="H5">UI5 Web Components Svelte Sample App</ui5-title>
	</div>

	<p class="help-dialog-text">
		<b>Release</b>: b225.20220729335 <br />
		<b>Server</b>: pk21443x3132 <br />
		<b>Timestamp</b>: 2022-08-18T10:29:03.159+0200 <br />
		<b>Company ID</b>: SAP <br />
		<b>UI version</b>: SAP Fiori <br />
		<b>Edition</b>: Enterprise <br />
		<b>Admin version</b>: Svelte Admin <br />
	</p>
	<hr />
	<span class="help-dialog-text">For more information, please visit our <a href="https://github.com/SAP-samples/ui5-webcomponents-sample-svelte" target="_blank">documentation</a>.</span>
	<p></p>
	<div class="dialog-button">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<ui5-button design="Emphasized" onclick={handleHelpDialogCloseButtonClick}>Close</ui5-button>
	</div>
</ui5-dialog>

<style>
	.app-header-logo {
		height: 2rem;
		max-height: 2rem;
	}

	.app-bar-theming-popover {
		width: 250px;
	}

	.app-bar-profile-popover {
		width: 250px;
	}

	ui5-dialog {
		max-width: 300px;
	}

	.dialog-button {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.625rem;
		margin-bottom: -0.425rem;
	}

	.profile-settings,
	.help-header {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.profile-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-inline-start: 1rem;
	}

	.app-header-logo {
		height: 2rem;
	}

	.profile-settings-list {
		margin-top: 1.25rem;
	}

	.help-dialog-text {
		font-size: 0.875rem;
	}

	.profile-rtl-switch {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#header-title-align {
		margin: 1rem 0;
		gap: 0.225rem;
	}

	#header-logo-align {
		margin: 0.225rem 3.225rem 0.225rem 0;
		align-items: center;
		gap: 0.435rem;
	}

	.help-dialog::part(header) {
		justify-content: flex-start;
	}
</style>
