# Sub-metering Blueprint

## Overall Description

This use case covers what a client does with its own sub-meters, below the delivery points of its suppliers:

1. **Metering tree** (Château de Versailles call for tenders): the consumption at any point of the tree and of any building without double counting, the unmetered part between a meter and its sub-meters, virtual meters, the communication status of each meter.
2. **Re-billing to a third party** (#8300): part of the consumption (electricity, water, gas, heat) measured by a sub-meter is billed on to someone else, an employee, an occupant or a company. First real case: the charging of an electric car at EGM, declared to URSSAF. It is the opposite direction from `energy-finances`: the client is the seller, and the volumes come from its own sub-meters, not from a supplier's invoices.

Both share the metering points; they may become two use cases later.

The blueprint has two purposes, in this order:

1. Let a user create metering points and place them in the tree, re-billing contracts and their customers, and keep the contracts up to date (prices, archiving).
2. Describe these entities so that the sub-metering dashboard can compute the tree and the statements.

The target model is `data_model_v2.md` (Energies - Fluides SharePoint folder), §4 "Metering tree" (D32–D36) and §5 "Re-billing to third parties" (D37, D38).

## Model

```text
RebillingContract ── customer ──> Organization | Person
        │
        └── volumeSource (one per product) ──> MeteringPoint ── isFedBy ──> MeteringPoint | DeliveryPoint
                                                    │
                                                    └── controlledAsset ──> Building | Asset | Space | ConnectivityNode
Device ── controlledAsset ──> MeteringPoint (measures copied onto the metering point)
```

| Entity | Role |
|--------|------|
| `RebillingContract` | Name, reference, customer, start and end dates, billing periodicity (`monthly` / `quarterly` / `yearly`), status (`active` / `archived`). `volumeSource`: one instance per product, with sub-properties `product`, `measureType` (`index` or `consumption`), optional `validFrom` / `validTo`. `unitPrice`: one instance per product and price change, with `product` and `validFrom`; optional. |
| `MeteringPoint` | Place where a fluid is measured or computed below a delivery point, for every fluid. Position in the metering tree (`isFedBy`), what it serves (`controlledAsset`), physical or virtual (`addedMeter` / `subtractedMeter`), communication status, reference source when several systems measure it (D39). Shared layer: to move to `building-management` once agreed. |
| `Organization` | Same type as `energy-finances` (D12); roles optional here. |
| `Person` | An individual customer: name only. |

Read, not declared here: the `consumption` / `index` measures of each `MeteringPoint` (D9 `datasetId`s), the `Device` linked to it, and the entities it serves.

Statements are computed by the dashboard, not stored (D38): one table per contract, one row per period and product (start and end dates, start and end index, quantity, unit price, cost excluding VAT). A price change during a period splits the row; a device change never produces a difference across the two devices.

Enum values are stable English codes (`electricity`, `quarterly`, `archived`…).

## Identifiers

| Entity | Id |
|--------|----|
| `RebillingContract` | `urn:ngsi-ld:RebillingContract:{uuid}` (typed in the form) |
| `MeteringPoint` | `urn:ngsi-ld:MeteringPoint:{uuid}` |
| `Person` | `urn:ngsi-ld:Person:{uuid}` |

## Twin Picks limitations

- The `datasetId` of a multi-instance attribute is hidden outside developer mode and defaults to 1, 2…: the product is therefore a sub-property, not the `datasetId`.
- `schemaType: 'number'` has no input in the Digital Twin form yet: `unitPrice` is declared as `integer`, whose input accepts decimals.
- Contracts are archived (`status`), never deleted; restricting deletion to a super admin is a Twin Picks permission, not a blueprint setting.

## Open points (data model, to do)

- `Asset isPartOf Building / Space` for equipment, needed to count a metering tree by building (D35).
- Frozen statements (`RebillingStatement`) if statements sent to a customer must not change after a data correction (D38).
