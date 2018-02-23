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
#### Test Form
* run server and go to the page where form has been included
* default form should show up if the bundle has been correctly installed


