const {version} = require('../../package.json');

const UserAgent: string = `github-sdk/${version}`;

export namespace Props {
    export type Token = string;

    export interface BaseProps {
        token: Token
    }

    export interface ClassProps extends BaseProps {
        object: string
    }
}

export default class Base {
    private readonly token: Props.Token;
    private readonly authorization: string;
    private readonly object: string;

    constructor(props: Props.ClassProps) {
        this.token = props.token;
        this.authorization = `Bearer ${this.token}`;
        this.object = props.object;
    }

    protected async request() {

    }
}
