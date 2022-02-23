import * as pulumi from "@pulumi/pulumi";
import * as os from "@pulumi/openstack";

// Create an OpenStack resource (Compute Instance)
const instance = new os.compute.Instance("test", {
	flavorName: "small",
	imageName: "ubuntu-focal-20.04",
});

// Export the IP of the instance
export const instanceIP = instance.accessIpV4;
