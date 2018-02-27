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
    endpoint: "https://api.formbucket.com/f/########"
    
```
#### Dependencies
* require [jquery](https://jquery.com/)

#### Include form
* This line goes in twig file where form should be.
```
{% include 'AkhannFormBucketBundle:form:form.html.twig' %}

```
#### Include Js file
```
<script src="{{ asset('js/jquery-3.3.1.min') }}"></script>
<script src="{{ asset('bundles/akhannformbucket/js/formbucket.js') }}"></script>

```

##### Function in the Js file accepts parameters
```
//deafult settings
"successClass": ".success", 
"errorClass": ".error" ,
"validate": null

```

##### Example for a multiple chekboxk validation
```
<script type="text/javascript">
    $('form[data-formbucket]').akFormBucket({
        validate: function(form) {
          checked = $("input[type=checkbox]:checked", form).length;
          if(!checked) {
            $(".checkErrorMsg").show();
            return false;
          }
          return true;
        }
    }); 
</script>

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
> /vendor/akhann/form-bucket-bundle/Resources/views 
* to 
> /app/Resources/AkhannFormBucketBundle/views/form
>
* folder should contain 2 files 
    * form_content.html.twig
    * form.html.twig
    
> note: There is no need to override form.html.twig for every project, only when error and success message need to be customized.


