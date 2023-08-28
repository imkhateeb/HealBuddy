export default {
        name: 'expertDoc',
        title: 'ExpertDoc',
        type: 'document',
        fields: [
                {
                        name: 'docTitle',
                        title: 'DocTitle',
                        type: 'string',
                },
                {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        Options: {
                                hotspot: true
                        }
                }
        ]
}