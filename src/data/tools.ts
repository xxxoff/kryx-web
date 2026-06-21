export type Tool = {
  name: string;
  role: string;
  stage: string;
};

// Real tools wired under the hood — shown as the "engine".
export const TOOLS: Tool[] = [
  { name: "nmap", role: "Port & service mapping", stage: "Recon" },
  { name: "subfinder", role: "Passive subdomain discovery", stage: "Recon" },
  { name: "whatweb", role: "Tech fingerprinting", stage: "Recon" },
  { name: "crt.sh", role: "Certificate transparency", stage: "Recon" },
  { name: "nuclei", role: "Templated vuln scanning", stage: "Hunt" },
  { name: "ffuf", role: "Content & param fuzzing", stage: "Hunt" },
  { name: "sqlmap", role: "Injection exploitation", stage: "Hunt" },
  { name: "testssl.sh", role: "TLS / cipher analysis", stage: "Hunt" },
  { name: "NVD API", role: "CVE intelligence", stage: "Hunt" },
];
