export default {
   name: 'user',
   title: 'User',
   type: 'document',
   fields: [
      {
         name: 'fullName',
         title: 'Full Name',
         type: 'string',
      },
      {
         name: 'userName',
         title: 'User Name',
         type: 'string',
      },
      {
         name: 'email',
         title: 'Email',
         type: 'string',
      },
      {
         name: 'password',
         title: 'Password',
         type: 'string',
      },
      {
         name: 'role',
         title: 'Role',
         type: 'string',
      },
      {
         name: 'gender',
         title: 'Gender',
         type: 'string',
      },
      {
         name: 'activeArea',
         title: 'Active area',
         type: 'string',
      },
      {
         name: 'age',
         title: 'Age',
         type: 'number',
      },
      {
         name: 'image',
         title: 'Image',
         type: 'image',
         Options : {
            hotspot: true,
         }
      },
      {
         name: 'initialAssessments',
         title: 'InitialAssessments',
         type: 'array',
         of: [{type : 'initialAssessment'}]
      },
   ]
}