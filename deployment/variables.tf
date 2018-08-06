variable "aws_region" {
  description = "The AWS region to deploy into (default: us-west-2)."
  default     = "us-west-2"
}

variable "blog_url" {
  description = "The url for the blog (i.e.: blog.kylegalbraith.com)"
  default     = "blog.kylegalbraith.com"
}

variable "acm_certificate_arn" {
  description = "ARN for the AWS Certificate Manager SSL certificate (see https://blog.kylegalbraith.com/2018/03/02/adding-free-ssl-certificates-to-static-websites-via-aws-certificate-manager/ for details)"
  default     = ""
}