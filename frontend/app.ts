interface NodeConfig {
    id: number;
    name: string;
    isActive: boolean;
}

const node: NodeConfig = {
    id: 1,
    name: "Auto-Node-01",
    isActive: true
};

console.log(`Node ${node.name} is running.`);
