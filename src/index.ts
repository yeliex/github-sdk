import { Props as BaseProps } from './models/Base';

export namespace Props {
    export interface GithubProps extends BaseProps.BaseProps {

    }
}

export default class Github {
    constructor(props: Props.GithubProps) {
        
    }
}

module.exports = Github;

Object.defineProperties(module.exports, {
    default: {
        value: Github,
        enumerable: false,
        configurable: false,
        writable: false
    }
});
