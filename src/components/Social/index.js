import React from 'react';
import config from '../../config/config';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

const Social = props => {
    const title = props.title;
    const url = props.url;
    const tweet = title + ' by @' + config.authorTwitterAccount;
    return (
        <ul className="list-reset inline-flex">
            <li className="p-4">
                <TwitterShareButton
                    url={url}
                    title={tweet}
                    className="button">
                    <TwitterIcon
                        size={32}
                        round={true} />
                </TwitterShareButton>
            </li>
            <li className="p-4">
                <FacebookShareButton
                    url={url}
                    quote={title}
                    className="button">
                    <FacebookIcon
                        size={32}
                        round={true} />
                </FacebookShareButton>
            </li>
        </ul>
    );
};

export default Social;