import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
import { withStyles } from "@material-ui/core/styles";

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
    default: ErrorIcon,
};

const styles = theme => ({
    default: {},
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: "flex",
        alignItems: "center",
    },
});

class SnackContent extends React.Component {
    render () {
        const { classes, message, onClose, variant, ...other } = this.props;
        const Icon = variantIcon[variant];

        return (
            <SnackbarContent
                className = { classes[variant] }
                aria-describedby = "client-snackbar"
                message = {
                    <span id = "client-snackbar" className = { classes.message }>
                        <Icon className = { classNames(classes.icon, classes.iconVariant) }/>
                        {message}
                    </span>
                }
                action = { [
                    <IconButton
                        key = "close"
                        aria-label = "Close"
                        color = "inherit"
                        onClick = { onClose }
                    >
                        <CloseIcon/>
                    </IconButton>,
                ] }
                { ...other }
            />
        );
    }
}

SnackContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(["success", "warning", "error", "info", "default"]).isRequired,
};

export default withStyles(styles)(SnackContent);
