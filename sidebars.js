/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
   
  GetStarted:[
    {
        type: 'category',
        label: 'Qodly Hero Handbook',
        link: {
            type: 'doc',
            id: 'qodlyHeroHandbook/intro',
        },
        items: [
            'qodlyHeroHandbook/layers',
            { 	
                type: 'category',
                label: 'Qodly Studio - QDroid',
                link: {
                    type: 'doc',
                    id: 'qodlyHeroHandbook/qodlyStudio/intro',
                },
                items: [
                    'qodlyHeroHandbook/qodlyStudio/accessingQodly',
                    { 	
                        type: 'category',
                        label: 'WebForms',
                        link: {
                            type: 'doc',
                            id: 'qodlyHeroHandbook/qodlyStudio/webforms/intro',
                        },
                        items: [
                            { 	
                                type: 'category',
                                label: 'Components',
                                link: {
                                    type: 'doc',
                                    id: 'qodlyHeroHandbook/qodlyStudio/webforms/components/intro',
                                },
                                items: [
                                    { 	
                                        type: 'category',
                                        label: 'Components',
                                        link: {
                                            type: 'generated-index',
                                            title: 'QDroid Incredible Components',
                                            description: 'For web application development, the first sub-element of the Components section is highly useful, providing powerful features that simplify the process. Now, let us take a closer look at each of the available components:',
                                            slug: '/category/components',
                                            keywords: ['components'],
                                            image: '/img/docusaurus.png',
                                        },
                                        items: [
                                            { 	
                                                type: 'category',
                                                label: 'Webform',
                                                link: {
                                                    type: 'doc',
                                                    id: 'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/intro',
                                                },
                                                items: [
                                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/propertiesPanel',
                                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/tooltip',
                                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/headerPanel',
                                                    'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webform/contextualPanel',
                                                ],
                                            },
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/styleBox',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/button',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/grid',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/checkBox',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/image',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/icon',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/selectBox',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/text',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/webformLoader',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/radio',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/matrix',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/selectInput',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/textInput',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/rangeInput',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/tabs',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/dataTable',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/fileInput',
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/components/columns',
                                        ],
                                    },
                                    { 	
                                        type: 'category',
                                        label: 'Crafted Components',
                                        link: {
                                            type: 'doc',
                                            id: 'qodlyHeroHandbook/qodlyStudio/webforms/components/craftedComponents/intro',
                                        },
                                        items: [
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/craftedComponents/intro',
                                        ],
                                    },
                                    { 	
                                        type: 'category',
                                        label: 'Templates',
                                        link: {
                                            type: 'doc',
                                            id: 'qodlyHeroHandbook/qodlyStudio/webforms/components/templates/intro',
                                        },
                                        items: [
                                            'qodlyHeroHandbook/qodlyStudio/webforms/components/templates/intro',
                                        ],
                                    },
                                ],
                            },
                            { 	
                                type: 'category',
                                label: 'Datasources',
                                link: {
                                    type: 'doc',
                                    id: 'qodlyHeroHandbook/qodlyStudio/webforms/datasources/intro',
                                },
                                items: [
                                    'qodlyHeroHandbook/qodlyStudio/webforms/datasources/intro',
                                ],
                            },
                            { 	
                                type: 'category',
                                label: 'Style library',
                                link: {
                                    type: 'doc',
                                    id: 'qodlyHeroHandbook/qodlyStudio/webforms/styleLibrary/intro',
                                },
                                items: [
                                    'qodlyHeroHandbook/qodlyStudio/webforms/styleLibrary/intro',
                                ],
                            },
                            { 	
                                type: 'category',
                                label: 'Outline',
                                link: {
                                    type: 'doc',
                                    id: 'qodlyHeroHandbook/qodlyStudio/webforms/outline/intro',
                                },
                                items: [
                                    'qodlyHeroHandbook/qodlyStudio/webforms/outline/intro',
                                ],
                            },
                        ],
                    },
                ],
            },
            { 	
                type: 'category',
                label: 'Qodly Server - Fortress',
                link: {
                    type: 'generated-index',
                    title: 'test',
                    description: 'test',
                    slug: '/qodlyServer',
                    keywords: ['qodlyServer'],
                    image: '/img/qodly.png',
                },
                items: [
                    'qodlyHeroHandbook/qodlyServer/intro',
                ],
            },
            { 	type: 'category',
                label: 'Qodly Cloud - Nimbus',
                link: {
                    type: 'generated-index',
                    title: 'test',
                    description: 'test',
                    slug: '/qodlyCloud',
                    keywords: ['qodlyCloud'],
                    image: '/img/qodly.png',
                },
                items: [
                    'qodlyHeroHandbook/qodlyCloud/intro',
                ],
            },
        ],
    },
	{
      type: 'category',
      label: 'Concepts',
	  link: {
			type: 'generated-index',
			title: 'Concepts',
			description: 'Description of the main concepts implemented in Qodly.',
			slug: '/category/concepts',
			keywords: ['concepts'],
			image: '/img/docusaurus.png',
			},
      items: ['concepts/server-architecture','concepts/db',
				{ 	type: 'category',
					label: 'ORDA',
					link: {
						type: 'doc',
						id: 'concepts/orda/overview',
					},
					items: [
						'concepts/orda/data-model',
						'concepts/orda/orda-classes',
						'concepts/orda/data',
						'concepts/orda/glossary',
					],
				},
			],
    },
    {
      type: 'doc',
      id: 'materials',
      label: "Materials"
    }, 
    {
      type: 'doc',
      id: 'overview',
      label: "Welcome"
    },
	{
      type: 'doc',
      id: 'get-started',
      label: "Getting Started"
    },
  ],
  
  
  Development:[
  
	{
      type: 'category',
      label: 'Qodly Studio',
	  link: {
			type: 'generated-index',
			title: 'Qodly Studio',
			description: 'Welcome to the Qodly Studio documentation.',
			slug: '/category/studio',
			keywords: ['Studio', 'Development'],
			image: '/img/docusaurus.png',
			},
		items: [
		{
			type: 'category',
			label: "Configuration",
			items: ['studio/configuration/4d-settings',
				'studio/configuration/license-usage'
			],
		},
		{
			type: 'category',
			label: 'Model',
			items: ['studio/model/model-overview',
				'studio/model/model-editor-interface',
				'studio/model/datastore-classes'
			],
		},
		{
			type: 'category',
			label: 'Webforms',
			items: ['studio/design-webforms/create-webform',
				'studio/design-webforms/components',
				'studio/design-webforms/styling',
				'studio/design-webforms/datasources',
				'studio/design-webforms/events',
				'studio/rendering',
			],
		},
		{
			type: 'doc',
			id: 'studio/settings',
			label: "Settings"
		},
		{
			type: 'doc',
				id: 'studio/coding-and-debugging',
				label: "Coding and debugging"
		},
		],
	},
	
	{
		type: 'category',
		label: 'QodlyScript Reference',
		link: {
			type: 'generated-index',
			title: 'QodlyScript',
			description: 'QodlyScript Reference Guide',
			slug: '/category/qodlyscript',
			keywords: ['qodlyscript', 'language'],
			image: '/img/docusaurus.png',
			},
		items: [
		  		{
			type: 'doc',
			id: 'language/basics/lang-quicktour',
			label: "QuickTour"
		},
		{ 	type: 'category',
			label: 'Basics',
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: 'Basics',
				description: 'Main concepts of the QodlyScript Language.',
				slug: '/category/language',
				keywords: ['language'],
				image: '/img/docusaurus.png',
			},
			items: ['language/basics/lang-variables',
				{ 	type: 'category',
					label: 'Data Types',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'language/basics/lang-data-types',
					},
					items: [
						'language/basics/lang-blob',
						'language/basics/lang-boolean',
						'language/basics/lang-collection',
						'language/basics/lang-date',
						'language/basics/lang-null-undefined',
						'language/basics/lang-number',
						'language/basics/lang-object',
						'language/basics/lang-picture',
						'language/basics/lang-time',
						'language/basics/lang-text',
						'language/basics/lang-variant',
					],
				},
				'language/basics/lang-operators',
				'language/basics/lang-methods',
				'language/basics/lang-classes',
				'language/basics/lang-parameters',
				'language/basics/lang-expressions',
				'language/basics/lang-shared',
				'language/basics/lang-control-flow',
				'language/basics/lang-errors',
				'language/basics/lang-identifiers',
				'language/basics/lang-pathnames',
				],
		},
		{ 	type: 'category',
			label: 'Themes & classes',
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: 'Themes & classes',
				description: 'List of commands and functions of the QodlyScript language',
				slug: '/category/themes',
				keywords: ['themes','classes'],
				image: '/img/docusaurus.png',
			},
			items: ['language/BlobClass',
			'language/boolean',
			'language/ClassClass',
			'language/CollectionClass',
			'language/CryptoKeyClass',
			'language/DataClassClass',
			'language/DataStoreClass',
			'language/dateandtime',
			'language/EmailObjectClass',
			'language/EntityClass',
			'language/EntitySelectionClass',
			'language/FileClass',
			'language/FileHandleClass',
			'language/FolderClass',
			'language/FunctionClass',
			'language/HTTPRequestClass',
			'language/IMAPTransporterClass',
			'language/MailAttachmentClass',
			'language/math',
			'language/string',
			'language/UsersClass',
			'language/WebForm',
			],
		},
	],
  },
 ],
		

  Cloud:[
  	{
		type: 'category',
		label: 'Cloud',
		link: {
			type: 'generated-index',
			title: 'Cloud',
			description: 'Qodly Cloud documentation',
			slug: '/category/cloud',
			image: '/img/docusaurus.png',
			},
		items: [
		  		{
					type: 'doc',
					id: 'cloud/overview-cloud',
					label: "Overview"
				},
			],
	},
	],


  API:[
	{
		type: 'category',
		label: 'API',
		link: {
			type: 'generated-index',
			title: 'API',
			description: 'QodlyScript REST API',
			slug: '/category/API',
			image: '/img/docusaurus.png',
			},
		items: [
		  		{
					type: 'doc',
					id: 'api/overview-api',
					label: "Overview"
				},
			],
	},
  ],

};
	
module.exports = sidebars;
