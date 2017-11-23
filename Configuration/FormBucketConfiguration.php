<?php

namespace Akhann\Bundle\FormBucketBundle\Configuration;

class FormBucketConfiguration
{
    protected $endpoint;

    public function __construct($endpoint)
    {
        $this->endpoint = $endpoint;
    }

    public function getEndpoint()
    {
        return $this->endpoint;
    }
}
