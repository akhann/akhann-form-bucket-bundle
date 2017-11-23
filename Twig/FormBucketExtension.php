<?php

namespace Akhann\Bundle\FormBucketBundle\Twig;

use Akhann\Bundle\FormBucketBundle\Configuration\FormBucketConfiguration;

class FormBucketExtension extends \Twig_Extension
{
    private $config;

    public function __construct(FormBucketConfiguration $config)
    {
        $this->config = $config;
    }

    public function getFunctions()
    {
        return array(
            new \Twig_SimpleFunction('akhann_form_bucket_endpoint', array($this->config, 'getEndpoint')),
        );
    }
}