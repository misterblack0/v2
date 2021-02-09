import React from "react";
import PropTypes from "prop-types";
import IconExternal from "./external";
import IconGitHub from "./github";
import IconGitHub2 from "./github2";
import IconLinkedin from "./linkedin";

const Icon = ({ name }) => {
    switch (name) {
        case "External":
            return <IconExternal />;
        case "GitHub":
            return <IconGitHub />;
        case "GitHub2":
            return <IconGitHub2 />;
        case "Linkedin":
            return <IconLinkedin />;
        default:
            return <IconExternal />;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired
};

export default Icon;
