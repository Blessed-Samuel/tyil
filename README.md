# TYIL Leadership Organization (Teens and Youth In Leadership).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About TYIL

TYIL is a dynamic leadership organization dedicated to developing young leaders who will make a positive impact in their communities and beyond. they provide comprehensive training, mentorship, and real-world leadership opportunities to help youth discover their potential and transform into confident, capable leaders.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

- 🌟 **Leadership Programs** - Comprehensive training modules for different leadership styles
- 👥 **Mentorship Network** - Connect with experienced leaders and peers
- 📊 **Progress Tracking** - Monitor leadership development journey
- 🎯 **Community Projects** - Real-world leadership application opportunities
- 📱 **Mobile Responsive** - Access leadership resources on any device
- 🔐 **Secure Authentication** - Protect member data and progress

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: [Your database choice]
- **Deployment**: Vercel

## Project Structure

```
tyil/
├── app/
│   ├── (auth)/
│   ├── dashboard/
│   ├── programs/
│   ├── mentorship/
│   └── community/
├── components/
│   ├── ui/
│   ├── navigation/
│   └── forms/
├── lib/
├── public/
└── styles/
```

## Key Pages

I'll rephrase that for you, making the pages' purpose and content clearer.

***

## Key Pages

- **Home** - Provides a general overview of our organization's mission and vision.
- **About Us** - Details our available leadership development programs and initiatives.
- **Programs** - The platform for mentor matching, communication, and collaboration.
- **Publication** - A space for tracking personal leadership journeys and sharing success stories.
- **Leadquest 25** - A hub for project collaboration and showcasing impact stories.

## Development

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm/bun

### Installation

```bash
# Clone the repository
git clone https://github.com/[username]/tyil.git

# Navigate to project directory
cd tyil-webpage

# Install dependencies
npm install

# Set up environment variables
cp .env.local

# Run development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

## Contributing

We welcome contributions from developers who share our passion for youth leadership development!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure your changes don't break existing functionality

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Leadership Resources

- [Leadership Development Guide](./docs/leadership-guide.md)
- [Mentorship Best Practices](./docs/mentorship.md)
- [Community Impact Toolkit](./docs/community-impact.md)
- [API Documentation](./docs/api.md)

## Support

- 📧 Email: Tyilcommunity@gmail.com
- 💬 Discord: [TYIL Community](https://discord.gg/tyil)
- 📚 Documentation: [docs.tyil.org](https://docs.tyil.org)
- 🐛 Issues: [GitHub Issues](https://github.com/Blessed-Samuel/tyil/issues)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!-- ## Acknowledgments

- All the young leaders who inspire us daily
- Our mentors and advisors who guide our mission
- The Next.js team for the amazing framework
- Our community partners and supporters -->
