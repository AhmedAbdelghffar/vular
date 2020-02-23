import store from "../store";
import anotherFields from "./anotherFields";
export default [
    {
        name: 'Button',
        slug: 'bButton',
        icon: 'mdi-link',
        file: 'buttonProps',
        props: {
            content: {
                text: 'Button',
                url: '',
                newTab: false,
                icon:''
            },
            style: {
                backgroundColor: store.state.style.primaryColor,
                textColor: '#ffffff',
                rounded: false,
                outlined: false,
                tile: false,
                block: false,
                shadow: 1,
                buttonAlign: 'left',
                iconPosition: 'right',
                iconColor: '#ffffff'
            },
            another: anotherFields
        }
    },
    {
        name: 'Text Block',
        slug: 'bTextBlock',
        icon: 'mdi-card-text-outline',
        file: 'textBlockProps',
        props: {
            content: {
                text: ''
            },
            another: anotherFields
        }
    },
    {
        name: 'Single Image',
        slug: 'bImg',
        icon: 'mdi-image-outline',
        file: 'imageProps',
        props: {
            content: {
                url: '',
                clickUrl: ''
            },
            style: {
                position: '',
                width: '',
                height:'',
                objectFit: ''
            },
            another: anotherFields
        }
    },
    {
        name: 'Divider',
        slug: 'bDivider',
        icon: 'mdi-format-page-break',
        file: 'dividerProps',
        props: {
            another: anotherFields
        }
    },
    {
        name: 'Title',
        slug: 'bTitle',
        icon: 'mdi-format-header-1',
        file: 'titleProps',
        props: {
            content: {
                text: 'Title',
            },
            style: {
                textColor: store.state.style.titleColor,
                fontSize: '',
                lineHeight: '',
                fontWeight: '',
            },
            another: anotherFields
        }
    },
    {
        name: 'Accordion',
        slug: 'bAccordion',
        icon: 'mdi-format-list-bulleted-triangle',
        file: 'accordionProps',
        props: {
            content: {
                textList:[
                    {
                        accordionTitle: 'Title',
                        accordionContent: ''
                    }
                ]
            },
            another: anotherFields
        }
    },
    {
        name: 'Tabs',
        slug: 'bTabs',
        icon: 'mdi-tab',
        file: 'tabsProps',
        props: {
            content: {
                textList:[
                    {
                        tabTitle: 'Title',
                        tabContent: ''
                    }
                ]
            },
            another: anotherFields
        }
    },
    {
        name: 'Slider',
        slug: 'bSlider',
        icon: 'mdi-image-area-close',
        file: 'sliderProps',
        props: {
            content: {
                sliderList:[
                    {
                        url: '',
                        caption: '',
                        captionPosition: ''
                    }
                ]
            },
            another: anotherFields
        }
    },
    {
        name: 'Gallery',
        slug: 'bGallery',
        icon: 'mdi-image-multiple',
        file: 'galleryProps',
        props: {
            content: {
                galleryList:[
                    {
                        url: '',
                        caption: '',
                    }
                ]
            },
            another: anotherFields
        }
    },
    {
        name: 'Partners',
        slug: 'bPartners',
        icon: 'mdi-flag',
        file: 'partnersProps',
        props: {
            content: {
                partnersList:[
                    {
                        url: '',
                        caption: '',
                    }
                ]
            },
            another: anotherFields
        }
    },
    {
        name: 'Image Card',
        slug:'bImage-card',
        icon: 'mdi-card-bulleted-outline',
        file: 'imageCardProps',
        props: {
            content: {
                img: '',
                title: '',
                link: '',
                description: ''
            }
        }
    },
    {
        name: 'Custom Section',
        slug: 'bCustomSection',
        icon: 'mdi-focus-field',
        file: 'customSectionProps',
        props: {
            content: {
                name: '',
                slug: ''
            },
            another: anotherFields
        }
    }
]