<<<<<<< HEAD
export interface ApiDataProps {
    object: {
        slug: string;
        title: string;
        type: string;
        metadata: {
            services: ServicosProps[];
            telefone: string;
        }
    }
}

export interface ServicosProps {
    id: string;
    label: string;
    imgpath: {
        url: string;
        imgix_url: string;
    };
}

export interface FooterProps {
    telefones: string[];
}

export interface ContactFieldProps {
    telefones: string[];
=======
export interface ApiDataProps {
    object: {
        slug: string;
        title: string;
        type: string;
        metadata: {
            services: ServicosProps[];
            telefone: string;
        }
    }
}

export interface ServicosProps {
    id: string;
    label: string;
    imgpath: {
        url: string;
        imgix_url: string;
    };
}

export interface FooterProps {
    telefones: string[];
}

export interface ContactFieldProps {
    telefones: string[];
>>>>>>> 1a3b13d (fix-age-add-readme)
}