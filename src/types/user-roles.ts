export enum ROLES {
  SUPERADMIN = "Super Admin",
  TEAMLEAD = "Team Lead",
  OM = "OM",
  AGENT = "Agent",
  CUSTOMERSERVICE = "Customer Service",
}

export const roleOptions = Object.keys(ROLES).map(key => ({
  value: key,
  label: ROLES[key as keyof typeof ROLES],
}));
