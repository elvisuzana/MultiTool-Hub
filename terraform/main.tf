resource "aws_instance" "node_server" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
}
