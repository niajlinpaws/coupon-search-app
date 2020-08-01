/* Importing Package Dependencies */
import React, { PureComponent } from 'react';

/* Logo image and redirection link */
class Logo extends PureComponent {
    render() {
        return (
            <a href="/">
                <img src="logo.jpg" alt="Logo" />
            </a>
        );
    }
}
export { Logo };