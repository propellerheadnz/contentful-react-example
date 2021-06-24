const devCfg = {
    contentful: {
        environment: 'dev',
        //use export terminal function to assign your tokens to the following vars
        deliveryToken: 'BcZqu0UVFMTBIkO4GKapf87NuyA8vriIwA1U2av33OA',
        previewToken: '62SgOzhBdmT16XKwEKX6iKbKtYNr89cz-tzHbnDS24I',
    },
    ga: {
        code: 'UA-00000000-0'
    },
};

const prodCfg = {
    contentful: {
        environment: 'master',
        // set these environment vars on Netlify
        deliveryToken: 'KI_NF_aMIO6ibxubELH8cUbJsonyDUrS1I5jUaMoEgg',
        previewToken: 'GxZ7XkyOuu9NSLGoEhp1ppwzTD-fwboeV9_41RPnTjs',
    },
    ga: {
        code: 'UA-000000000-1'
    },
};

const hook = process.env.REACT_APP_STAGE === 'production' ? prodCfg : devCfg;

const config = {
    // merge environment-specifc config
    ...hook,
    siteName: 'Propellerhead',
    contentful: {
        spaceId: 'qc07v8cngk18',
        ...hook.contentful,
    },
};
export default config;
