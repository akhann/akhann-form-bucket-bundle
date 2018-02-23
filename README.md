# FormBucketBundle
Bundle for using formbucket services (https://www.formbucket.com/) on symfony project.

#### Installation
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
* this line goes in twig file where form should be.
```
{% include 'AkhannFormBucketBundle:form:form.html.twig' %}

```
#### Preparing environment
```
$ php bin/console cache:clear
$ php bin/console assets:install
```
#### Test Form
* run server and go to the page where form has been included
* default form should show up if the bundle has been correctly installed
