# Nuraghe

`Nuraghe` is a P2P media sharing protocol which allows building decentralized social networks.

## Versioning

- This package uses semantic versioning on the form: `major.minor.patch`
- Any version that changes the `__nrge` type is at least a `minor` change
    - This keeps the package version tied to the _nuraghe_ version, which is of the format `major.minor`

## Modules

|Name|Description|
|----|-----------|
|`core`|Fundamental buckets and jobs|
|`consumer`|A node that reads content from the network|
|`publisher`|A node that publishes content on the network|
|`tracker`|A node that catalogues the network|
|`plugins_info`|Basic info, such as addresses and contacts|
|`plugins_events`|Events|

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

## Overview

### Buckets

|Module|Name|Description|
|------|----|-----------|
|_core_|`content`||
|_core_|`content`||
|_core_|`pgp_key`||
|_publisher_|`publisher`||
|_tracker_|`tracker`||
|_plugins_info_|`address`||
|_plugins_info_|`contact`||
|_plugins_info_|`location`||
|_plugins_events_|`event`||
|_plugins_events_|`schedule`||

### Jobs

|Module|Name|Description|
|------|----|-----------|
|
|_core_|`pgp.sync`|Sync PGP keys from a file|
|_core_|`pgp.offer_trust`|Offer a challenge for earning PGP trust|
|_core_|`pgp.confirm_trust`|Accepts and solves a challenge|
|
|_consumer_|`backup`|Backup consumer database to a file|
|_consumer_|`restore`|Restore consumer database from file|
|_consumer_|`publisher.link`|Add a new publisher to the consumer database|
|_consumer_|`publisher.unlink`|Remove an existing publisher from the consumer database|
|_consumer_|`tracker.link`|Add a new tracker to the consumer database|
|_consumer_|`tracker.unlink`|Remove an existing tracker from the consumer database|
|
|_publisher_|`backup`|Backup publisher database to a file|
|_publisher_|`restore`|Restore publisher database from file|
|_publisher_|`publish`|Publish .nrge file for this publisher|
|_publisher_|`publisher.create`|Create a new publisher|
|_publisher_|`publisher.update`|Update an existing publisher|
|_publisher_|`publisher.delete`|Delete an existing publisher|
|
|_tracker_|`backup`|Backup tracker database to a file|
|_tracker_|`restore`|Restore tracker database from file|
|_tracker_|`publish`|Publish .nrge file for this tracker|
|_tracker_|`tracker.create`|Create a new tracker|
|_tracker_|`tracker.update`|Update an existing tracker|
|_tracker_|`tracker.delete`|Delete an existing tracker|
|
|_plugins_info_|`address.create`|Create a new address|
|_plugins_info_|`address.update`|Update an existing address|
|_plugins_info_|`address.delete`|Delete an existing address|
|_plugins_info_|`contact.create`|Create a new contact|
|_plugins_info_|`contact.update`|Update an existing contact|
|_plugins_info_|`contact.delete`|Delete an existing contact|
|_plugins_info_|`location.create`|Create a new location|
|_plugins_info_|`location.update`|Update an existing location|
|_plugins_info_|`location.delete`|Delete an existing location|
|
|_plugins_events_|`event.create`|Create a new event|
|_plugins_events_|`event.update`|Update an existing event|
|_plugins_events_|`event.delete`|Delete an existing event|
|_plugins_events_|`event.publish`|Publish an event (create a content for it)|
|_plugins_events_|`event.unpublish`|Unpublish an event (delete it's content)|
|_plugins_events_|`schedule.create`|Create a new schedule|
|_plugins_events_|`schedule.update`|Update an existing schedule|
|_plugins_events_|`schedule.delete`|Delete an existing schedule|