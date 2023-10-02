---
outline: deep
---

# GPG 

> This is a quick summary of a GPG document I got from someone.

## Generate key/s

```sh
gpg --expert --full-gen-key
```

Options:
- (9) ECC and ECC  
- (1) Curve 25519  
- Your preference of expiry time
- y (to confirm)
- Enter your details (you need at least 1 field):  
  - your pseudonym  
  - your email (you can leave blank)  
  - comments  
  - (O)kay to confirm details
- Use a good passphrase to secure your keys (see [XKCD#936](https://xkcd.com/936/?correct=horse&battery=staple) and [diceware](https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases))  

## Using GPG

### Download your contact's keys

```sh
curl -LO https://ahwx.org/pgp.txt
```

### Import contact's keys: 

```sh
gpg --import PUBLIC_KEYRING_OF_contact.<asc|gpg>
```

### List your key and your contacts:

```sh
gpg -k
```

### Verify your contact's fingerprint (long string of hex in the list)

### Export your public keyring and send it to your contact:

```sh
gpg -a --export <"your name"|email|your_fingerprint>
```

### Encrypt a message to your contact:

```sh
gpg -a -e -r <"contact name"|contact_email|contact_fingerprint>
```
> Note: use `-R` instead to hide recipient field

### Decrypt a message sent to you: 

```sh
gpg -a -d
```

Now paste into terminal, `CTRL+D` to end.

Clearsign a message: (ALWAYS INCLUDE TIMESTAMP IN UTC WHEN SIGNING)

```sh
gpg -a --personal-digest-prefs SHA512,SHA384,SHA256 --clearsign
```

Paste message into terminal, `CTRL+D` to end again.
  

### Summary:  
- Why use gpg?
  - Make sure your messages cannot be read by others  
  - Prove that you produced some data or who you say you are  
- Caveat: the above is only true if and when:
  - If you use GPG correctly
  - You and your recipient verify keys actually belong to the person
  - Both endpoints are not compromised
  - Both people can be trusted
