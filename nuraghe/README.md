# Nuraghe

`Nuraghe` is a P2P media sharing protocol which allows building decentralized social networks.

### Versioning

- This package uses semantic versioning on the form: `major.minor.patch`
- Any version that changes the OSF type schema is at least a `minor` change
    - This keeps the package version tied to the OSF version, which is of the format `major.minor`

### Modules

|Name|Description|
|----|-----------|
|consumer|A node that reads content from the network|
|publisher|A node that publishes content on the network|
|tracker|A node that catalogues the network|
|-|-|
|plugins / info|Basic info, such as addresses and contacts|
|plugins / events|Events|

### Consumer

_What is it?_ - An application.

The user adds _publisher links_, which allows subscribing to _contents_ from a _publisher_.

A feed shows _contents_ from the subscribed publishers.

### Publisher

_What is it?_ - A `publisher.nrge` file available at some static file server.

- It has an (ideally unique) id, on the ULID format.
- It has a pair of public/secret keys used to prove authenticity.

The file contains a list of _contents_.

#### Contents and Plugins

A `content` is an object which references a `plugin` by name and version, and contains a bytestring of data that's parseable by the plugin.

_Nuraghe_  declares a few standard plugins, for common forms of content.

- The content contains JSON metadata which is used when listing it

#### Signature

Every _content_ is signed by the publisher.
This allows _consumers_ and _trackers_ to check the content authenticity.

### Tracker

_What is it?_ - A `tracker.nrge` file available at some static file server.

- It has an (ideally unique) id, on the ULID format.
- It has a pair of public/secret keys used to prove authenticity.

The file contains a list of _publishers links_ and a _PGP keyring_.

#### Use Case

A user adds a _tracker link_.
With this, it's feed shows a preview of content from the publishers this tracker lists.

The user can then subscribe to the publisher's contents.

#### Web of Trust

The _trackers_ and _publishers_ use OpenPGP to stablish a Web of Trust for their respective certificates.

The _consumer_ can ask for the _tracker and publisher_ keyrings, which it uses to validate the trust on each.