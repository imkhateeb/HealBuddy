export default {
        name: 'client',
        title: 'Client',
        type: 'document',
        fields: [
                {
                        name: 'clientName',
                        title: 'ClientName',
                        type: 'string',
                },
                {
                        name: 'clientEmail',
                        title: 'ClientEmail',
                        type: 'string',
                },
                {
                        name: 'initialScore',
                        title: 'InitialScore',
                        type: 'string',
                },
                {
                        name: 'district',
                        title: 'District',
                        type: 'string',
                },
                {
                        name: 'exercies',
                        title: 'Exercises',
                        type: 'array',
                        of: [{ type : 'exercise' }]
                },
                {
                        name: 'sessions',
                        title: 'Sessions',
                        type: 'array',
                        of : [{ type: 'session' }],
                },
                {
                        name: 'certificates',
                        title: 'Certificates',
                        type: 'array',
                        of: [{ type: 'document' }]
                },
        ]
}