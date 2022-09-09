function int32ToIp(int32) {
  const binary = Number(int32).toString(2);
  const binary32 = new Array(32 - binary.length).fill(0).join('') + binary;
  const binaryOctets = binary32.match(/(\d{8})(\d{8})(\d{8})(\d{8})/).slice(1, 5);
  return binaryOctets.slice(0, 4).map(binaryOctet => parseInt(binaryOctet, 2).toString(10)).join('.');
}

console.log(int32ToIp(2149583361));
console.log(int32ToIp(32));
console.log(int32ToIp(0));
