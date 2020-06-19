import React from 'react';

import { useParams } from "react-router-dom";

import { useStore } from '../api';
import { WaitSkeleton } from '../components/WaitSkeleton';
import { ContentRenderer } from './ContentRenderer';
import { Layout } from './Layout';
import { NotFound } from './NotFound';
import { Notifier } from './Notifier';
import { PageTracker } from './PageTracker';

export const View = () => {
    const { contentStore } = useStore();
    var { type, slug } = useParams();

    const state = () => {
        [type, slug] = [type || "assembly", slug || "home"];
        if (type !== "preview") {
            return contentStore.useView(type, slug);
        } else {
            return contentStore.usePreview(slug);
        }
    }

    const { content, error } = state();

    return (
        <PageTracker content={content}>
            <Layout>
                {!error && content
                    ? <ContentRenderer content={content} />
                    : <WaitSkeleton variant="default" />
                }
                {error && error.status === 404 &&
                    <NotFound />
                }
                {error && error.status === 500 &&
                    <Notifier error={error} />
                }
            </Layout>
        </PageTracker>
    );
}

export default View;

View.propTypes = {};
View.defaultProps = {};