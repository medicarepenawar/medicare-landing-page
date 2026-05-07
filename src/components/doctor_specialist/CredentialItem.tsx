const CredentialItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1 pb-4 border-b border-gray-100">
    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
      {label}
    </span>
    <span className="text-sm font-bold text-gray-900">{value}</span>
  </div>
);

export default CredentialItem;
