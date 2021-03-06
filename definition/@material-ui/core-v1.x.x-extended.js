// @flow

/* eslint-disable id-match */

// add your declare module here

declare module "@material-ui/core/Button" {
    declare module.exports: $Exports<"material-ui/Button/Button">;
}

declare module "@material-ui/core/AppBar" {
    declare module.exports: $Exports<"material-ui/AppBar/AppBar">;
}

declare module "@material-ui/core/Toolbar" {
    declare module.exports: $Exports<"material-ui/Toolbar">;
}

declare module "@material-ui/core/Typography" {
    declare module.exports: $Exports<"material-ui/Typography">;
}

declare module "@material-ui/core/Dialog" {
    declare module.exports: $Exports<"material-ui/Dialog/Dialog">;
}

declare module "@material-ui/core/DialogTitle" {
    declare module.exports: $Exports<"material-ui/Dialog/DialogTitle">;
}

declare module "@material-ui/core/styles/createMuiTheme" {
    declare module.exports: $Exports<"material-ui/styles/createMuiTheme">;
}

declare module "@material-ui/core/styles/MuiThemeProvider" {
    declare module.exports: $Exports<"material-ui/styles/MuiThemeProvider">;
}

declare module "@material-ui/core/TextField" {
    declare module.exports: $Exports<"material-ui/TextField/TextField">;
}

declare module "@material-ui/core/CircularProgress" {
    declare module.exports: $Exports<"material-ui/Progress/CircularProgress">;
}

declare module "@material-ui/core/Snackbar" {
    declare module.exports: $Exports<"material-ui/Snackbar/Snackbar">;
}

// Filename aliases (copy from original file)

/*
declare module 'material-ui/Avatar/Avatar.js' {
    declare module.exports: $Exports<'material-ui/Avatar/Avatar'>;
}
declare module 'material-ui/Avatar/index.js' {
    declare module.exports: $Exports<'material-ui/Avatar'>;
}
declare module 'material-ui/Badge/Badge.js' {
    declare module.exports: $Exports<'material-ui/Badge/Badge'>;
}
declare module 'material-ui/Badge/index.js' {
    declare module.exports: $Exports<'material-ui/Badge'>;
}
declare module 'material-ui/BottomNavigation/BottomNavigation.js' {
    declare module.exports: $Exports<'material-ui/BottomNavigation/BottomNavigation'>;
}
declare module 'material-ui/BottomNavigation/BottomNavigationAction.js' {
    declare module.exports: $Exports<'material-ui/BottomNavigation/BottomNavigationAction'>;
}
declare module 'material-ui/BottomNavigation/index.js' {
    declare module.exports: $Exports<'material-ui/BottomNavigation'>;
}

declare module 'material-ui/ButtonBase/ButtonBase.js' {
    declare module.exports: $Exports<'material-ui/ButtonBase/ButtonBase'>;
}
declare module 'material-ui/ButtonBase/createRippleHandler.js' {
    declare module.exports: $Exports<'material-ui/ButtonBase/createRippleHandler'>;
}
declare module 'material-ui/ButtonBase/index.js' {
    declare module.exports: $Exports<'material-ui/ButtonBase'>;
}
declare module 'material-ui/ButtonBase/Ripple.js' {
    declare module.exports: $Exports<'material-ui/ButtonBase/Ripple'>;
}
declare module 'material-ui/ButtonBase/TouchRipple.js' {
    declare module.exports: $Exports<'material-ui/ButtonBase/TouchRipple'>;
}
declare module 'material-ui/Card/Card.js' {
    declare module.exports: $Exports<'material-ui/Card/Card'>;
}
declare module 'material-ui/Card/CardActions.js' {
    declare module.exports: $Exports<'material-ui/Card/CardActions'>;
}
declare module 'material-ui/Card/CardContent.js' {
    declare module.exports: $Exports<'material-ui/Card/CardContent'>;
}
declare module 'material-ui/Card/CardHeader.js' {
    declare module.exports: $Exports<'material-ui/Card/CardHeader'>;
}
declare module 'material-ui/Card/CardMedia.js' {
    declare module.exports: $Exports<'material-ui/Card/CardMedia'>;
}
declare module 'material-ui/Card/index.js' {
    declare module.exports: $Exports<'material-ui/Card'>;
}
declare module 'material-ui/Checkbox/Checkbox.js' {
    declare module.exports: $Exports<'material-ui/Checkbox/Checkbox'>;
}
declare module 'material-ui/Checkbox/index.js' {
    declare module.exports: $Exports<'material-ui/Checkbox'>;
}
declare module 'material-ui/Chip/Chip.js' {
    declare module.exports: $Exports<'material-ui/Chip/Chip'>;
}
declare module 'material-ui/Chip/index.js' {
    declare module.exports: $Exports<'material-ui/Chip'>;
}
declare module 'material-ui/colors/amber.js' {
    declare module.exports: $Exports<'material-ui/colors/amber'>;
}
declare module 'material-ui/colors/blue.js' {
    declare module.exports: $Exports<'material-ui/colors/blue'>;
}
declare module 'material-ui/colors/blueGrey.js' {
    declare module.exports: $Exports<'material-ui/colors/blueGrey'>;
}
declare module 'material-ui/colors/brown.js' {
    declare module.exports: $Exports<'material-ui/colors/brown'>;
}
declare module 'material-ui/colors/common.js' {
    declare module.exports: $Exports<'material-ui/colors/common'>;
}
declare module 'material-ui/colors/cyan.js' {
    declare module.exports: $Exports<'material-ui/colors/cyan'>;
}
declare module 'material-ui/colors/deepOrange.js' {
    declare module.exports: $Exports<'material-ui/colors/deepOrange'>;
}
declare module 'material-ui/colors/deepPurple.js' {
    declare module.exports: $Exports<'material-ui/colors/deepPurple'>;
}
declare module 'material-ui/colors/green.js' {
    declare module.exports: $Exports<'material-ui/colors/green'>;
}
declare module 'material-ui/colors/grey.js' {
    declare module.exports: $Exports<'material-ui/colors/grey'>;
}
declare module 'material-ui/colors/index.js' {
    declare module.exports: $Exports<'material-ui/colors'>;
}
declare module 'material-ui/colors/indigo.js' {
    declare module.exports: $Exports<'material-ui/colors/indigo'>;
}
declare module 'material-ui/colors/lightBlue.js' {
    declare module.exports: $Exports<'material-ui/colors/lightBlue'>;
}
declare module 'material-ui/colors/lightGreen.js' {
    declare module.exports: $Exports<'material-ui/colors/lightGreen'>;
}
declare module 'material-ui/colors/lime.js' {
    declare module.exports: $Exports<'material-ui/colors/lime'>;
}
declare module 'material-ui/colors/orange.js' {
    declare module.exports: $Exports<'material-ui/colors/orange'>;
}
declare module 'material-ui/colors/pink.js' {
    declare module.exports: $Exports<'material-ui/colors/pink'>;
}
declare module 'material-ui/colors/purple.js' {
    declare module.exports: $Exports<'material-ui/colors/purple'>;
}
declare module 'material-ui/colors/red.js' {
    declare module.exports: $Exports<'material-ui/colors/red'>;
}
declare module 'material-ui/colors/teal.js' {
    declare module.exports: $Exports<'material-ui/colors/teal'>;
}
declare module 'material-ui/colors/yellow.js' {
    declare module.exports: $Exports<'material-ui/colors/yellow'>;
}
declare module 'material-ui/Dialog/Dialog.js' {
    declare module.exports: $Exports<'material-ui/Dialog/Dialog'>;
}
declare module 'material-ui/Dialog/DialogActions.js' {
    declare module.exports: $Exports<'material-ui/Dialog/DialogActions'>;
}
declare module 'material-ui/Dialog/DialogContent.js' {
    declare module.exports: $Exports<'material-ui/Dialog/DialogContent'>;
}
declare module 'material-ui/Dialog/DialogContentText.js' {
    declare module.exports: $Exports<'material-ui/Dialog/DialogContentText'>;
}
declare module 'material-ui/Dialog/DialogTitle.js' {
    declare module.exports: $Exports<'material-ui/Dialog/DialogTitle'>;
}
declare module 'material-ui/Dialog/index.js' {
    declare module.exports: $Exports<'material-ui/Dialog'>;
}
declare module 'material-ui/Dialog/withMobileDialog.js' {
    declare module.exports: $Exports<'material-ui/Dialog/withMobileDialog'>;
}
declare module 'material-ui/Divider/Divider.js' {
    declare module.exports: $Exports<'material-ui/Divider/Divider'>;
}
declare module 'material-ui/Divider/index.js' {
    declare module.exports: $Exports<'material-ui/Divider'>;
}
declare module 'material-ui/Drawer/Drawer.js' {
    declare module.exports: $Exports<'material-ui/Drawer/Drawer'>;
}
declare module 'material-ui/Drawer/index.js' {
    declare module.exports: $Exports<'material-ui/Drawer'>;
}
declare module 'material-ui/ExpansionPanel/ExpansionPanel.js' {
    declare module.exports: $Exports<'material-ui/ExpansionPanel/ExpansionPanel'>;
}
declare module 'material-ui/ExpansionPanel/ExpansionPanelActions.js' {
    declare module.exports: $Exports<'material-ui/ExpansionPanel/ExpansionPanelActions'>;
}
declare module 'material-ui/ExpansionPanel/ExpansionPanelDetails.js' {
    declare module.exports: $Exports<'material-ui/ExpansionPanel/ExpansionPanelDetails'>;
}
declare module 'material-ui/ExpansionPanel/ExpansionPanelSummary.js' {
    declare module.exports: $Exports<'material-ui/ExpansionPanel/ExpansionPanelSummary'>;
}
declare module 'material-ui/ExpansionPanel/index.js' {
    declare module.exports: $Exports<'material-ui/ExpansionPanel'>;
}
declare module 'material-ui/Form/FormControl.js' {
    declare module.exports: $Exports<'material-ui/Form/FormControl'>;
}
declare module 'material-ui/Form/FormControlLabel.js' {
    declare module.exports: $Exports<'material-ui/Form/FormControlLabel'>;
}
declare module 'material-ui/Form/FormGroup.js' {
    declare module.exports: $Exports<'material-ui/Form/FormGroup'>;
}
declare module 'material-ui/Form/FormHelperText.js' {
    declare module.exports: $Exports<'material-ui/Form/FormHelperText'>;
}
declare module 'material-ui/Form/FormLabel.js' {
    declare module.exports: $Exports<'material-ui/Form/FormLabel'>;
}
declare module 'material-ui/Form/index.js' {
    declare module.exports: $Exports<'material-ui/Form'>;
}
declare module 'material-ui/Grid/Grid.js' {
    declare module.exports: $Exports<'material-ui/Grid/Grid'>;
}
declare module 'material-ui/Grid/index.js' {
    declare module.exports: $Exports<'material-ui/Grid'>;
}
declare module 'material-ui/GridList/GridList.js' {
    declare module.exports: $Exports<'material-ui/GridList/GridList'>;
}
declare module 'material-ui/GridList/GridListTile.js' {
    declare module.exports: $Exports<'material-ui/GridList/GridListTile'>;
}
declare module 'material-ui/GridList/GridListTileBar.js' {
    declare module.exports: $Exports<'material-ui/GridList/GridListTileBar'>;
}
declare module 'material-ui/GridList/index.js' {
    declare module.exports: $Exports<'material-ui/GridList'>;
}
declare module 'material-ui/Hidden/Hidden.js' {
    declare module.exports: $Exports<'material-ui/Hidden/Hidden'>;
}
declare module 'material-ui/Hidden/HiddenCss.js' {
    declare module.exports: $Exports<'material-ui/Hidden/HiddenCss'>;
}
declare module 'material-ui/Hidden/HiddenJs.js' {
    declare module.exports: $Exports<'material-ui/Hidden/HiddenJs'>;
}
declare module 'material-ui/Hidden/index.js' {
    declare module.exports: $Exports<'material-ui/Hidden'>;
}
declare module 'material-ui/Hidden/types.js' {
    declare module.exports: $Exports<'material-ui/Hidden/types'>;
}
declare module 'material-ui/Icon/Icon.js' {
    declare module.exports: $Exports<'material-ui/Icon/Icon'>;
}
declare module 'material-ui/Icon/index.js' {
    declare module.exports: $Exports<'material-ui/Icon'>;
}
declare module 'material-ui/IconButton/IconButton.js' {
    declare module.exports: $Exports<'material-ui/IconButton/IconButton'>;
}
declare module 'material-ui/IconButton/index.js' {
    declare module.exports: $Exports<'material-ui/IconButton'>;
}
declare module 'material-ui/Input/index.js' {
    declare module.exports: $Exports<'material-ui/Input'>;
}
declare module 'material-ui/Input/Input.js' {
    declare module.exports: $Exports<'material-ui/Input/Input'>;
}
declare module 'material-ui/Input/InputAdornment.js' {
    declare module.exports: $Exports<'material-ui/Input/InputAdornment'>;
}
declare module 'material-ui/Input/InputLabel.js' {
    declare module.exports: $Exports<'material-ui/Input/InputLabel'>;
}
declare module 'material-ui/Input/Textarea.js' {
    declare module.exports: $Exports<'material-ui/Input/Textarea'>;
}
declare module 'material-ui/internal/dom.js' {
    declare module.exports: $Exports<'material-ui/internal/dom'>;
}
declare module 'material-ui/Portal/Portal.js' {
    declare module.exports: $Exports<'material-ui/Portal'>;
}
declare module 'material-ui/internal/SwitchBase.js' {
    declare module.exports: $Exports<'material-ui/internal/SwitchBase'>;
}
declare module 'material-ui/internal/transition.js' {
    declare module.exports: $Exports<'material-ui/internal/transition'>;
}
declare module 'material-ui/List/index.js' {
    declare module.exports: $Exports<'material-ui/List'>;
}
declare module 'material-ui/List/List.js' {
    declare module.exports: $Exports<'material-ui/List/List'>;
}
declare module 'material-ui/List/ListItem.js' {
    declare module.exports: $Exports<'material-ui/List/ListItem'>;
}
declare module 'material-ui/List/ListItemAvatar.js' {
    declare module.exports: $Exports<'material-ui/List/ListItemAvatar'>;
}
declare module 'material-ui/List/ListItemIcon.js' {
    declare module.exports: $Exports<'material-ui/List/ListItemIcon'>;
}
declare module 'material-ui/List/ListItemSecondaryAction.js' {
    declare module.exports: $Exports<'material-ui/List/ListItemSecondaryAction'>;
}
declare module 'material-ui/List/ListItemText.js' {
    declare module.exports: $Exports<'material-ui/List/ListItemText'>;
}
declare module 'material-ui/List/ListSubheader.js' {
    declare module.exports: $Exports<'material-ui/List/ListSubheader'>;
}
declare module 'material-ui/Menu/index.js' {
    declare module.exports: $Exports<'material-ui/Menu'>;
}
declare module 'material-ui/Menu/Menu.js' {
    declare module.exports: $Exports<'material-ui/Menu/Menu'>;
}
declare module 'material-ui/Menu/MenuItem.js' {
    declare module.exports: $Exports<'material-ui/Menu/MenuItem'>;
}
declare module 'material-ui/Menu/MenuList.js' {
    declare module.exports: $Exports<'material-ui/Menu/MenuList'>;
}
declare module 'material-ui/MobileStepper/index.js' {
    declare module.exports: $Exports<'material-ui/MobileStepper'>;
}
declare module 'material-ui/MobileStepper/MobileStepper.js' {
    declare module.exports: $Exports<'material-ui/MobileStepper/MobileStepper'>;
}
declare module 'material-ui/Modal/Backdrop.js' {
    declare module.exports: $Exports<'material-ui/Modal/Backdrop'>;
}
declare module 'material-ui/Modal/index.js' {
    declare module.exports: $Exports<'material-ui/Modal'>;
}
declare module 'material-ui/Modal/Modal.js' {
    declare module.exports: $Exports<'material-ui/Modal/Modal'>;
}
declare module 'material-ui/Modal/modalManager.js' {
    declare module.exports: $Exports<'material-ui/Modal/modalManager'>;
}
declare module 'material-ui/Paper/index.js' {
    declare module.exports: $Exports<'material-ui/Paper'>;
}
declare module 'material-ui/Paper/Paper.js' {
    declare module.exports: $Exports<'material-ui/Paper/Paper'>;
}
declare module 'material-ui/Popover/index.js' {
    declare module.exports: $Exports<'material-ui/Popover'>;
}
declare module 'material-ui/Popover/Popover.js' {
    declare module.exports: $Exports<'material-ui/Popover/Popover'>;
}
declare module 'material-ui/Progress/CircularProgress.js' {
    declare module.exports: $Exports<'material-ui/Progress/CircularProgress'>;
}
declare module 'material-ui/Progress/index.js' {
    declare module.exports: $Exports<'material-ui/Progress'>;
}
declare module 'material-ui/Progress/LinearProgress.js' {
    declare module.exports: $Exports<'material-ui/Progress/LinearProgress'>;
}
declare module 'material-ui/Radio/index.js' {
    declare module.exports: $Exports<'material-ui/Radio'>;
}
declare module 'material-ui/Radio/Radio.js' {
    declare module.exports: $Exports<'material-ui/Radio/Radio'>;
}
declare module 'material-ui/Radio/RadioGroup.js' {
    declare module.exports: $Exports<'material-ui/Radio/RadioGroup'>;
}
declare module 'material-ui/Select/index.js' {
    declare module.exports: $Exports<'material-ui/Select'>;
}
declare module 'material-ui/Select/Select.js' {
    declare module.exports: $Exports<'material-ui/Select/Select'>;
}
declare module 'material-ui/Select/SelectInput.js' {
    declare module.exports: $Exports<'material-ui/Select/SelectInput'>;
}
declare module 'material-ui/Snackbar/index.js' {
    declare module.exports: $Exports<'material-ui/Snackbar'>;
}
declare module 'material-ui/Snackbar/Snackbar.js' {
    declare module.exports: $Exports<'material-ui/Snackbar/Snackbar'>;
}
declare module 'material-ui/Snackbar/SnackbarContent.js' {
    declare module.exports: $Exports<'material-ui/Snackbar/SnackbarContent'>;
}
declare module 'material-ui/Stepper/index.js' {
    declare module.exports: $Exports<'material-ui/Stepper'>;
}
declare module 'material-ui/Stepper/Step.js' {
    declare module.exports: $Exports<'material-ui/Stepper/Step'>;
}
declare module 'material-ui/Stepper/StepButton.js' {
    declare module.exports: $Exports<'material-ui/Stepper/StepButton'>;
}
declare module 'material-ui/Stepper/StepConnector.js' {
    declare module.exports: $Exports<'material-ui/Stepper/StepConnector'>;
}
declare module 'material-ui/Stepper/StepContent.js' {
    declare module.exports: $Exports<'material-ui/Stepper/StepContent'>;
}
declare module 'material-ui/Stepper/StepIcon.js' {
    declare module.exports: $Exports<'material-ui/Stepper/StepIcon'>;
}
declare module 'material-ui/Stepper/StepLabel.js' {
    declare module.exports: $Exports<'material-ui/Stepper/StepLabel'>;
}
declare module 'material-ui/Stepper/Stepper.js' {
    declare module.exports: $Exports<'material-ui/Stepper/Stepper'>;
}
declare module 'material-ui/Stepper/StepPositionIcon.js' {
    declare module.exports: $Exports<'material-ui/Stepper/StepPositionIcon'>;
}
declare module 'material-ui/styles/colorManipulator.js' {
    declare module.exports: $Exports<'material-ui/styles/colorManipulator'>;
}
declare module 'material-ui/styles/createBreakpoints.js' {
    declare module.exports: $Exports<'material-ui/styles/createBreakpoints'>;
}
declare module 'material-ui/styles/createGenerateClassName.js' {
    declare module.exports: $Exports<'material-ui/styles/createGenerateClassName'>;
}
declare module 'material-ui/styles/createMixins.js' {
    declare module.exports: $Exports<'material-ui/styles/createMixins'>;
}
declare module 'material-ui/styles/createMuiTheme.js' {
    declare module.exports: $Exports<'material-ui/styles/createMuiTheme'>;
}
declare module 'material-ui/styles/createPalette.js' {
    declare module.exports: $Exports<'material-ui/styles/createPalette'>;
}
declare module 'material-ui/styles/createTypography.js' {
    declare module.exports: $Exports<'material-ui/styles/createTypography'>;
}
declare module 'material-ui/styles/getStylesCreator.js' {
    declare module.exports: $Exports<'material-ui/styles/getStylesCreator'>;
}
declare module 'material-ui/styles/index.js' {
    declare module.exports: $Exports<'material-ui/styles'>;
}
declare module 'material-ui/styles/MuiThemeProvider.js' {
    declare module.exports: $Exports<'material-ui/styles/MuiThemeProvider'>;
}
declare module 'material-ui/styles/shadows.js' {
    declare module.exports: $Exports<'material-ui/styles/shadows'>;
}
declare module 'material-ui/styles/spacing.js' {
    declare module.exports: $Exports<'material-ui/styles/spacing'>;
}
declare module 'material-ui/styles/themeListener.js' {
    declare module.exports: $Exports<'material-ui/styles/themeListener'>;
}
declare module 'material-ui/styles/transitions.js' {
    declare module.exports: $Exports<'material-ui/styles/transitions'>;
}
declare module 'material-ui/styles/withStyles.js' {
    declare module.exports: $Exports<'material-ui/styles/withStyles'>;
}
declare module 'material-ui/styles/withTheme.js' {
    declare module.exports: $Exports<'material-ui/styles/withTheme'>;
}
declare module 'material-ui/styles/zIndex.js' {
    declare module.exports: $Exports<'material-ui/styles/zIndex'>;
}
declare module 'material-ui/svg-icons/ArrowDownward.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/ArrowDownward'>;
}
declare module 'material-ui/svg-icons/ArrowDropDown.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/ArrowDropDown'>;
}
declare module 'material-ui/svg-icons/Cancel.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/Cancel'>;
}
declare module 'material-ui/svg-icons/CheckBox.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/CheckBox'>;
}
declare module 'material-ui/svg-icons/CheckBoxOutlineBlank.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/CheckBoxOutlineBlank'>;
}
declare module 'material-ui/svg-icons/CheckCircle.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/CheckCircle'>;
}
declare module 'material-ui/svg-icons/IndeterminateCheckBox.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/IndeterminateCheckBox'>;
}
declare module 'material-ui/svg-icons/KeyboardArrowLeft.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/KeyboardArrowLeft'>;
}
declare module 'material-ui/svg-icons/KeyboardArrowRight.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/KeyboardArrowRight'>;
}
declare module 'material-ui/svg-icons/RadioButtonChecked.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/RadioButtonChecked'>;
}
declare module 'material-ui/svg-icons/RadioButtonUnchecked.js' {
    declare module.exports: $Exports<'material-ui/svg-icons/RadioButtonUnchecked'>;
}
declare module 'material-ui/SvgIcon/index.js' {
    declare module.exports: $Exports<'material-ui/SvgIcon'>;
}
declare module 'material-ui/SvgIcon/SvgIcon.js' {
    declare module.exports: $Exports<'material-ui/SvgIcon/SvgIcon'>;
}
declare module 'material-ui/Switch/index.js' {
    declare module.exports: $Exports<'material-ui/Switch'>;
}
declare module 'material-ui/Switch/Switch.js' {
    declare module.exports: $Exports<'material-ui/Switch/Switch'>;
}
declare module 'material-ui/Table/index.js' {
    declare module.exports: $Exports<'material-ui/Table'>;
}
declare module 'material-ui/Table/Table.js' {
    declare module.exports: $Exports<'material-ui/Table/Table'>;
}
declare module 'material-ui/Table/TableBody.js' {
    declare module.exports: $Exports<'material-ui/Table/TableBody'>;
}
declare module 'material-ui/Table/TableCell.js' {
    declare module.exports: $Exports<'material-ui/Table/TableCell'>;
}
declare module 'material-ui/Table/TableFooter.js' {
    declare module.exports: $Exports<'material-ui/Table/TableFooter'>;
}
declare module 'material-ui/Table/TableHead.js' {
    declare module.exports: $Exports<'material-ui/Table/TableHead'>;
}
declare module 'material-ui/Table/TablePagination.js' {
    declare module.exports: $Exports<'material-ui/Table/TablePagination'>;
}
declare module 'material-ui/Table/TableRow.js' {
    declare module.exports: $Exports<'material-ui/Table/TableRow'>;
}
declare module 'material-ui/Table/TableSortLabel.js' {
    declare module.exports: $Exports<'material-ui/Table/TableSortLabel'>;
}
declare module 'material-ui/Tabs/index.js' {
    declare module.exports: $Exports<'material-ui/Tabs'>;
}
declare module 'material-ui/Tabs/Tab.js' {
    declare module.exports: $Exports<'material-ui/Tabs/Tab'>;
}
declare module 'material-ui/Tabs/TabIndicator.js' {
    declare module.exports: $Exports<'material-ui/Tabs/TabIndicator'>;
}
declare module 'material-ui/Tabs/Tabs.js' {
    declare module.exports: $Exports<'material-ui/Tabs/Tabs'>;
}
declare module 'material-ui/Tabs/TabScrollButton.js' {
    declare module.exports: $Exports<'material-ui/Tabs/TabScrollButton'>;
}
declare module 'material-ui/TextField/index.js' {
    declare module.exports: $Exports<'material-ui/TextField'>;
}
declare module 'material-ui/TextField/TextField.js' {
    declare module.exports: $Exports<'material-ui/TextField/TextField'>;
}
declare module 'material-ui/Tooltip/index.js' {
    declare module.exports: $Exports<'material-ui/Tooltip'>;
}
declare module 'material-ui/Tooltip/Tooltip.js' {
    declare module.exports: $Exports<'material-ui/Tooltip/Tooltip'>;
}
declare module 'material-ui/transitions/Collapse.js' {
    declare module.exports: $Exports<'material-ui/transitions/Collapse'>;
}
declare module 'material-ui/transitions/Fade.js' {
    declare module.exports: $Exports<'material-ui/transitions/Fade'>;
}
declare module 'material-ui/transitions/Grow.js' {
    declare module.exports: $Exports<'material-ui/transitions/Grow'>;
}
declare module 'material-ui/transitions/index.js' {
    declare module.exports: $Exports<'material-ui/transitions'>;
}
declare module 'material-ui/transitions/Slide.js' {
    declare module.exports: $Exports<'material-ui/transitions/Slide'>;
}
declare module 'material-ui/utils/addEventListener.js' {
    declare module.exports: $Exports<'material-ui/utils/addEventListener'>;
}
declare module 'material-ui/utils/ClickAwayListener.js' {
    declare module.exports: $Exports<'material-ui/utils/ClickAwayListener'>;
}
declare module 'material-ui/utils/exactProp.js' {
    declare module.exports: $Exports<'material-ui/utils/exactProp'>;
}
declare module 'material-ui/utils/helpers.js' {
    declare module.exports: $Exports<'material-ui/utils/helpers'>;
}
declare module 'material-ui/utils/keyboardFocus.js' {
    declare module.exports: $Exports<'material-ui/utils/keyboardFocus'>;
}
declare module 'material-ui/utils/manageAriaHidden.js' {
    declare module.exports: $Exports<'material-ui/utils/manageAriaHidden'>;
}
declare module 'material-ui/utils/reactHelpers.js' {
    declare module.exports: $Exports<'material-ui/utils/reactHelpers'>;
}
declare module 'material-ui/utils/requirePropFactory.js' {
    declare module.exports: $Exports<'material-ui/utils/requirePropFactory'>;
}
declare module 'material-ui/utils/withWidth.js' {
    declare module.exports: $Exports<'material-ui/utils/withWidth'>;
}
*/
