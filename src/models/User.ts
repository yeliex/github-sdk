import Base, { Props as BaseProps } from './Base';

export default class User extends Base {
    constructor(props: BaseProps.BaseProps) {
        super({...props, object: 'user'});
    }


}
