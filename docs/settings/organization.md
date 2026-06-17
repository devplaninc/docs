---
title: Organization Settings
slug: /settings/organization
sidebar_label: Organization
sidebar_position: 3
---

import createOrg from '../assets/screenshots/create_org.png';

# Organization Settings

Organizations let you centrally manage billing across multiple workspaces under a single
account — the most cost-effective way to use Devplan, with access to the full suite of
features. These settings appear once you belong to an organization.
**Settings > Organization**.

---

## General {#general}

**Settings > Organization > General**

- **Organization name** and **logo**
- **Organization owners** — add or remove owners
- **Danger Zone** — delete the org (requires no active subscription and no workspaces)

---

## Workspaces {#workspaces}

**Settings > Organization > Workspaces**

Create or add workspaces under your organization. Requires an active enterprise subscription —
enroll from [Billing](#billing) first.

---

## Billing {#billing}

**Settings > Organization > Billing**

Enroll in an enterprise plan via Stripe checkout, or open **Manage Enterprise Subscription**
for payment details and invoices. An active subscription unlocks
[Organization Workspaces](#workspaces).

### Migrating to Organization Billing {#migrate-to-organization-billing}

Organization Billing centralizes billing for your whole organization: multiple workspaces,
one billing account for all enrolled users.

**Create and enroll an organization**

1. Open your [Profile Billing Page](https://app.devplan.com/user/profile/billing).
2. Click **Create Organization**.
   <img src={createOrg} alt="Create Organization" style={{width: '600px', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px', padding: '8px'}}/>
3. Enter the organization name and optionally select an icon, then click **Create**. You can
   change the name and icon later.
4. Go to the **Billing** tab of the organization you just created.
5. Enroll in your preferred plan.
6. Once enrolled, add existing workspaces to your organization or create new ones from the
   **Settings** tab of the organization. Organization settings appear when you click your user
   icon in the bottom-left corner.

**If you already have a personal subscription**

If you enrolled in organization billing while you still have a personal subscription, cancel
the personal one on your [Profile Billing Page](https://app.devplan.com/user/profile/billing).
Click **Manage Personal Subscription** to open the Stripe customer portal and cancel.

Questions or issues? Reach us at [info@devplan.com](mailto:info@devplan.com).

---

## Related pages

- [Workspace Settings](/settings/workspace)
- [Profile Settings](/settings/profile)
