export interface IDiscordProfile {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  email: string;
  verified: true;
  locale: string;
  mfa_enabled: boolean;
  premium_type: number;
  provider: string;
  accessToken: string;
  fetchedAt: Date;
}
