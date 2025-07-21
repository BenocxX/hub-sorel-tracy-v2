## Developing

Make sure to start a Postgres DB locally (`docker compose up`). Then create a `.env` file with a DATABASE_URL for prisma. You can look at the example provided in `.env.example`.

```bash
bun install

bunx prisma migrate dev # Will apply db migrations
bunx prisma generate

bun run dev
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `npm run preview`.

## Deploy on a fresh EC2

Start an EC2 instance on AWS. Recommended settings:

- Distribution: Debian 12
- Architecture: 64-bit Arm (needed to use `t4g.*` instances)
- Instance type: t4g.small
- Network settings: Open ports for SSH and HTTP/HTTPS.
- Storage: default settings (8 GiB gp3)

SSH into the instance and run the following commands:

```bash
sudo apt update
sudo apt upgrade
```

### Setup a GitHub self-hosted runner

We will use a GitHub self-hosted runner to execute some workflows directly on our server. To configure a self-hosted runner, go to your repo's setting > Actions > Runners then follow the guide.

#### Run the runner as a service

```bash
cd ~/actions-runner
sudo ./svc.sh install
sudo ./svc.sh start

# To check status
sudo ./svc.sh status
```

### Install Postgres

First, we'll configure the server to use `fr_CA` locale and `America/Montreal` timezone.

```bash
sudo localedef -i fr_CA -c -f UTF-8 -A /usr/share/locale/locale.alias fr_CA.UTF-8
sudo update-locale LANG=fr_CA.UTF-8
export LANG=fr_CA.UTF-8

sudo timedatectl set-timezone America/Montreal
```

Then, install Postgres:

```bash
sudo apt install postgresql
```

#### Create a user and a database

```bash
sudo -u postgres psql <<EOF
CREATE USER [USERNAME] WITH PASSWORD '[PASSWORD]';
ALTER USER [USERNAME] CREATEDB;
EOF

sudo -u postgres createdb [DB_NAME] -O [USERNAME]
```

Run the following command to connect to the database and make sure everything is working:

```bash
psql -U [USERNAME] -d postgres -h localhost -d [DB_NAME] -W
```

### Install bun

We are using Bun to bundle the project. We can install bun using:

```bash
sudo apt install unzip # Needed to install bun
curl -fsSL https://bun.sh/install | bash
sudo ln -s $HOME/.bun/bin/bun /usr/local/bin/bun
sudo ln -s $HOME/.bun/bin/bunx /usr/local/bin/bunx
source ~/.bashrc
```

### Install pm2

We are using pm2 to run the website in the background. We can install pm2 using:

```bash
bun install --global pm2
bunx pm2 -v
```

### Nginx

(Prerequisite: setup a domain that points to the ec2 instance)

We need Nginx to act as a reverse proxy to redirect all requests on `80/443` to `3000`. We can install nginx using:

```bash
sudo apt install nginx
```

In `/etc/nginx/nginx.conf`, comment the following line: `include /etc/nginx/sites-enabled/*;`, then reload nginx with `sudo nginx -s reload`.

#### Setup certbot for https

First, install certbot:

```bash
sudo apt install certbot python3-certbot-nginx
```

Then, request a free certificate:

```bash
sudo certbot --nginx -d [DOMAIN]
```

To renew the certificates:

```bash
sudo certbot renew
```
