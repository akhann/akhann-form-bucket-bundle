# FormBucketBundle
Bundle for using formbucket services (https://www.formbucket.com/) on symfony project.

## Installation

#### Installation with composer
```
composer require akhann/form-bucket-bundle
```

#### Enable the bundle
* Add in app/AppKernel.php
```
new Akhann\Bundle\FormBucketBundle\AkhannFormBucketBundle(),
```

#### Configure the installed bundles
* Add in app/config/config.yml
```
#Akhann Form Bucket
akhann_form_bucket:
    endpoint: "url goes here"
```

#### Include form
* This line goes in twig file where form should be.
```
{% include 'AkhannFormBucketBundle:form:form.html.twig' %}
```
#### Include Js file
```
<script src="{{ asset('bundles/akhannformbucket/js/formbucket.js') }}"></script>
```

#### Include Css file
```
<link rel="stylesheet" href="{{ asset('bundles/akhannformbucket/css/formbucket.css')}}" rel="stylesheet" type="text/css" />
```

#### Preparing environment
```
$ app/console cache:clear
$ app/console assets:install
```

## Overide
* Copy form folder from 
>/vendor/akhann/form-bucket-bundle/Resources/views 
>to 
>/app/Resources/AkhannFormBucketBundle/views/form
>
* folder should contain 2 files 
    * form_content.html.twig
    *form.html.twig
    
> note: no need to overide this file for all projects, only when customising error and success message. 


