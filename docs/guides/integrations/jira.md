---
title: "Jira Integration"
sidebar_position: 3
---

_Note: Jira Integration is in beta now_

### Set up procedure:

1. Install [Devplan Jira Atlassian](https://developer.atlassian.com/console/install/cd539bc3-11b5-4b71-a82d-d8af831435a1?signature=AYABeETqleNeikM5CMnAxz%2B755IAAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6NzA5NTg3ODM1MjQzOmtleS83ZjcxNzcxZC02OWM4LTRlOWItYWU5Ny05MzJkMmNhZjM0NDIAuAECAQB4KVgoNesMySI2pXEz4J5S%2B4but%2FgpPvEEG0vL8V0Jz5cBPXqIpFHwuylgGhQUrD7WFAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDJcRfkjl7WpHMarLtAIBEIA7mc2prFXlHJjTKbDnNcpmzeACyi2tBtMq3hVrGHdh2akO5mTfwz%2BBy6EHr6bPeNKoM2L60HHHIemHrDIAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzU1OWQ0NTE2LWE3OTEtNDdkZi1iYmVkLTAyNjFlODY4ZWE1YwC4AQICAHig7hOcRWe1S%2BcRRsjD9q0WpZcapmXa1oPX3jm4ao883gF4Eo5GpaFrAlXkpsEWdYNKAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMn%2FqaVxEv1dTfPdUbAgEQgDuBVtVlNMJJ47vMCa7oWNLyN%2BfRjcnRrVN%2BiX%2BjGQnibmcqInsNVcfBzPugUtVZ6PNUkDRe%2Bsgm7urUPgAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtd2VzdC0yOjcwOTU4NzgzNTI0MzprZXkvM2M0YjQzMzctYTQzOS00ZmNhLWEwZDItNDcyYzE2ZWRhZmRjALgBAgIAeBeusbAYURagY7RdQhCHwxFswh7l65V7cwKp%2BDc1WGoHAVlLDoEvXPFCxzm%2FW5nVIsQAAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAwoTaqw7IFZWPAYzAYCARCAO3gE%2FMvECQjfUjr0lqu2N5T%2FdiuIAKtBgtXKQypXXfHqYzmqbMPGvL5WjVe8MxHYmGyUnpK0jog1ssaRAgAAAAAMAAAQAAAAAAAAAAAAAAAAAOYf7d4xRr3RzSZt2Jc8A%2Fr%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADJtmNORi7b8ozuX4AmbPzgLt1wtlQC7ySPPBb8KDvfFhFGzE9BK0iAxszz6eCbUaX2oBe%2FkWOBdho%2BVmvPIwCsBVUY%3D&product=jira) application.
2. Connect or re-connect Jira from the `Settings -> Integrations` screen

Once this is done, you should see a `Sync Jira` button on the **Build Plan** tab. Once User Stories are synced, they can be re-synced again as many time as needed. Each re-sync will update Jira User Stories to match the latest version on Devplan.

#### Some limitations of the current implementation:
* Export from Devplan to Jira has static mapping: Devplan Project is mapped to a Jira Epic and Devplan User Story is mapped to a Jira User Story. So the project you export into must have both Epic and User Stories set up.
* Connection for now is one way, i.e. changes made in Jira after export will not be reflected back in Devplan.


Please, let us know if you have feedback or suggestions.