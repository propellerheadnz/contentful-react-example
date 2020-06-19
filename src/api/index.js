import React, { createContext, useContext, useState, useEffect  } from 'react';

import { createClient } from 'contentful';

import config from '../config';

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
    const stores = {
        contentStore: { useMenu, useView, useFooter, usePreview },
    };

    return (
        <StoreContext.Provider value={stores}>
            {children}
        </StoreContext.Provider>
    );
};

const useMenu = () => {
    const [menu, setMenu] = useState({ error: null });

    useEffect(() => {
        const fetch = async () => {
            try {
                const resp = await pubApi.getEntries({ content_type: 'assembly', 'fields.slug': 'site-root', include: 1 }); //locale,
                setMenu({ menu: resp.items[0].fields.blocks, error: null });
            } catch (e) {
                console.error(e);
                setMenu({ menu: null, error: { status: 500, msg: 'An issue occurred while menu items.' } });
            }
        };

        fetch();
    }, []);

    return menu
}

const useView = (type, slug) => {
    const [view, setView] = useState({ error: null });

    useEffect(() => {
        const fetch = async (type, slug) => {
            try {
                const resp = await pubApi.getEntries({ content_type: type, 'fields.slug': slug, include: 3 }); //locale,
                if (resp.items.length > 0) {
                    setView({ content: resp.items[0], error: null });
                } else {
                    setView({ content: null, error: { status: 404, msg: 'No matching content' } });
                }
            } catch (e) {
                console.error(e);
                setView({ content: null, error: { status: 500, msg: 'An issue occurred while fetching page content.' } });
            }
        };

        fetch(type, slug);
    }, [type, slug]);

    return view
}

const usePreview = (id) => {
    const [preview, setPreview] = useState({ error: null });

    useEffect(() => {
        const fetch = async (id) => {
            try {
                const resp = await preApi.getEntry(id, { include: 3 }); //locale,
                if (resp) {
                    setPreview({ content: resp, error: null });
                } else {
                    setPreview({ content: null, error: { status: 404, msg: 'No matching content' } });
                }
            } catch (e) {
                console.error(e);
                setPreview({ content: null, error: { status: 500, msg: 'An issue occurred while fetching page content.' } });
            }
        };

        fetch(id);
    }, [id]);

    return preview;
}

const useFooter = () => {
    const [footer, setFooter] = useState({ error: null });

    useEffect(() => {
        const fetch = async () => {
            try {
                const resp = await pubApi.getEntries({ content_type: 'resourceSet', 'fields.name': 'footer', include: 2 }); //locale,
                setFooter({ footer: resp.items[0].fields.resources, error: null });
            } catch (e) {
                console.error(e);
                setFooter({ footer: null, error: { status: 500, msg: 'An issue occurred while fetching footer content.' } });
            }
        };

        fetch();
    }, []);

    return footer
}

const pubApi = createClient({
    space: config.contentful.spaceId,
    environment: config.contentful.environment,
    accessToken: config.contentful.deliveryToken,
    host: 'https://cdn.contentful.com', 
    removeUnresolved: true
})

const preApi = createClient({
    space: config.contentful.spaceId,
    environment: config.contentful.environment,
    accessToken: config.contentful.previewToken,
    host: 'preview.contentful.com',
    removeUnresolved: true
})